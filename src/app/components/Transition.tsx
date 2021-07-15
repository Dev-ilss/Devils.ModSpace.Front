import { CSSTransition as ReactCSSTransition } from 'react-transition-group';
import * as React from 'react';

interface contextProps {
  parent: any;
}

interface cssTransitionProps {
  show?: any;
  enter?: any;
  enterFrom?: any;
  enterTo?: any;
  leave?: any;
  leaveFrom?: any;
  leaveTo?: any;
  appear?: any;
  children?: any;
}

interface transitionProps extends cssTransitionProps {
  show?: boolean;
  appear?: any;
  rest?: any;
  children?: any;
}

const TransitionContext = React.createContext({
  parent: {},
} as contextProps);

function useIsInitialRender() {
  const isInitialRender = React.useRef(true);
  React.useEffect(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

function CSSTransition({
  show,
  enter = '',
  enterFrom = '',
  enterTo = '',
  leave = '',
  leaveFrom = '',
  leaveTo = '',
  appear,
  children,
}: cssTransitionProps) {
  const enterClasses = enter.split(' ').filter(s => s.length);
  const enterFromClasses = enterFrom.split(' ').filter(s => s.length);
  const enterToClasses = enterTo.split(' ').filter(s => s.length);
  const leaveClasses = leave.split(' ').filter(s => s.length);
  const leaveFromClasses = leaveFrom.split(' ').filter(s => s.length);
  const leaveToClasses = leaveTo.split(' ').filter(s => s.length);

  function addClasses(node, classes) {
    classes.length && node.classList.add(...classes);
  }

  function removeClasses(node, classes) {
    classes.length && node.classList.remove(...classes);
  }

  return (
    <ReactCSSTransition
      appear={appear}
      unmountOnExit
      in={show}
      addEndListener={(node, done) => {
        node.addEventListener('transitionend', done, false);
      }}
      onEnter={node => {
        removeClasses(node, [...leaveToClasses]);
        addClasses(node, [...enterClasses, ...enterFromClasses]);
      }}
      onEntering={node => {
        removeClasses(node, [...enterFromClasses]);
        addClasses(node, [...enterToClasses]);
      }}
      onEntered={node => {
        removeClasses(node, [...enterClasses]);
      }}
      onExit={node => {
        removeClasses(node, [...enterToClasses]);
        addClasses(node, [...leaveClasses, ...leaveFromClasses]);
      }}
      onExiting={node => {
        removeClasses(node, [...leaveFromClasses]);
        addClasses(node, [...leaveToClasses]);
      }}
      onExited={node => {
        removeClasses(node, [...leaveClasses]);
      }}
    >
      {children}
    </ReactCSSTransition>
  );
}

function Transition({ show, appear, ...rest }: transitionProps) {
  const { parent } = React.useContext(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;

  if (isChild) {
    return (
      <CSSTransition
        appear={parent.appear || !parent.isInitialRender}
        show={parent.show}
        {...rest}
      />
    );
  }

  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show,
          isInitialRender,
          appear,
        },
      }}
    >
      <CSSTransition appear={appear} show={show} {...rest} />
    </TransitionContext.Provider>
  );
}

export default Transition;
