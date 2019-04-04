const descripcion =
{
  demand : true,
  alias : 'd',
  desc : 'descripcion de la tarea por hacer'
};

const completado =
{
  default : true,
  alias : 'c',
  desc : 'marca como completada o pendiente una tarea'
};

const argv = require('yargs')

  .command('crear', 'crea un elemento por hacer',
  {
      descripcion
  })
  .command('actualizar', 'actualiza el estado completo de una tarea',
  {
    descripcion,
    completado
  })
  .command('borrar', 'elimina una tarea',
  {
      descripcion
  })
  .help()
  .argv;

module.exports =
{
  argv
}
