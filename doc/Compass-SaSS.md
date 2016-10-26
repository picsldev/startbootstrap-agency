# introducción:


 - [Explicación general sobre Sass/Compass](http://leandono.github.io/workshop-sass-compass/#1)

## Instalación en Debian

~~~sh
apt-get install ruby
apt-get install rubygems
~~~

### Paquetes adicionales

~~~bash
gem install sass compass susy compass-recipes
~~~

Crear la base:

~~~sh
cd ~/RaizDelProyecto/
~~~

Creamos el directorio donde volcaremos el CSS generado, normalmente 'css':
~~~sh
compass create DIR_SALIDA_CSS -r susy -u susy
~~~

Ponerlo en escucha, para comenzar a trabajar:
~~~sh
cd ~/RaizDelProyecto/DIR_SALIDA_CSS/

# Lo podemos lanzar con sass:
clear && sass --watch input.sass:output.css

# ó lo lanzamos con compass:
# clear && compass watch .
~~~

## Ejemplo de creación de un proyecto

~~~sh

├─ desarrollo@lcabrera8cores ─┤:/tmp/TEST ¶ compass create miproyecto
directory miproyecto/ 
directory miproyecto/sass/ 
directory miproyecto/stylesheets/ 
   create miproyecto/config.rb 
   create miproyecto/sass/screen.scss 
   create miproyecto/sass/print.scss 
   create miproyecto/sass/ie.scss 
    write miproyecto/stylesheets/ie.css
    write miproyecto/stylesheets/print.css
    write miproyecto/stylesheets/screen.css
~~~

*********************************************************************
Congratulations! Your compass project has been created.

You may now add and edit sass stylesheets in the sass subdirectory of your project.

Sass files beginning with an underscore are called partials and won't be
compiled to CSS, but they can be imported into other sass stylesheets.

You can configure your project by editing the config.rb configuration file.

You must compile your sass stylesheets into CSS when they change.
This can be done in one of the following ways:
  1. To compile on demand:
     compass compile [path/to/project]
  2. To monitor your project for changes and automatically recompile:
     compass watch [path/to/project]

More Resources:
  * Website: http://compass-style.org/
  * Sass: http://sass-lang.com
  * Community: http://groups.google.com/group/compass-users/


To import your new stylesheets add the following lines of HTML (or equivalent) to your webpage:

~~~html
<head>
  <link href="/stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
  <link href="/stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />
  <!--[if IE]>
      <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
  <![endif]-->
</head>
~~~
