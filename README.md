# TemperaturePiFrontend

<img src="https://github.com/LeChrisU/TemperaturePiFrontend/blob/master/app_screenshot.png" align="left"/>

Angular.js v1 based Frontend for the Temperature Pi Home Project.

The HTML5 app provided in `/app` provides an example of how to consume a JSON-based REST API using MVVM architecture. In this scenario, both temperature and humidity read from a USB-WDE1 receiver (http://www.elv.de/-353.html) and subsequently stored into a MySQL database is visualized via c3.js.

As usual for Angular.js based apps, the bootstrapper can be found at `app/scripts/app.js`, View Models at `app/scripts/controllers` and Views at `app/views`.

Both mobile and desktop scenarios are supported via Bootstrap styles.

This project was scaffolded with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview. Additionally, one can run `nohup grunt serve &` to run the preview from a background process.

## Testing

Running `grunt test` will run the unit tests with karma.

## Demo

For a live running version (hosted in Microsoft Azure) please visit http://weatherpi.chris-ullrich.de/.

The JSON data visualized can be seen at http://mypi.chris-ullrich.de/weather.

The repository containing the back end project can be visited at https://github.com/LeChrisU/TemperaturePiBackend.
