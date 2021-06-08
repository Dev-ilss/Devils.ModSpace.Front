const { codegen } = require('swagger-axios-codegen');

codegen({
  methodNameMode: 'path',
  //TODO: Poner la ruta correcta del JSON (ademas de cambiar a url de contenedor en ECS)
  remoteUrl: 'http://localhost:4000/api/v1/docs-json',
  outputDir: './src/app/services',
  fileName: 'ms-service-proxy.ts',
  strictNullChecks: false,
  useStaticMethod: true,
});
