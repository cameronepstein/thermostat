$(document).ready(function() {
  var thermostat = new Thermostat();
  console.log(thermostat.getCurrentTemperature())
  var updateViews = function() {
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#power-saving-status').text(thermostat.isPowerSavingModeOn() ? 'on' : 'off')
    $('body').attr('class', thermostat.energyUsage());
  };
  updateViews();
  $('#temperature-down').text('-');
  $('#temperature-up').text('+');
  $('#temperature-down').on('click', function() {
    thermostat.down();
    updateViews();
  });
  $('#temperature-up').on('click', function() {
    thermostat.up();
    updateViews();
  });
  $('#temperature-reset').on('click', function() {
    thermostat.resetTemperature();
    updateViews();
  });
  $('#powersaving-on').on('click', function() {
    thermostat.switchPowerSavingModeOn();
    updateViews();
  });
  $('#powersaving-off').on('click', function() {
    thermostat.switchPowerSavingModeOff();
    updateViews();
  });
});
