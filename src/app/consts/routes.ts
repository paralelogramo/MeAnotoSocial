export enum routes {

    LOGIN = '/login',

    // Routes for Admin
    DASHBOARD = '/admin/dashboard',
    ACCOUNTS = '/admin/cuentas',
    DEPENDENCIES ='/admin/salas',
    MODULES = '/admin/cursos',
    

    // Routes for Professor
    DASHBOARDP = '/profesor/dashboard',
    MODULESP = '/profesor/cursos',
    DETAILMODULESP = '/profesor/cursos/detalle',
    EVENTSP ='/profesor/miseventos',

    // Routes for Student
    DASHBOARDS = '/estudiante/dashboard',
    MODULESS = '/estudiante/cursos',
    MODULESEVENTSS = '/estudiante/cursos/eventos',
    EVENTSS ='/estudiante/miseventos',

    // Routes for Operative
    // DASHBOARDP = '/professor/dashboard',
    // ACCOUNTSP = '/professor/cuentas',
    // DEPENDENCIESP ='/professor/salas',
    // MODULESP = '/professor/cursos',
}
  