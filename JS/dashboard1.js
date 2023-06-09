// Load the Visualization API and the controls package.
google.charts.load('current', {'packages':['corechart', 'controls']});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawDashboard);

// Callback that creates and populates a data table,
// instantiates a dashboard, a range slider and a pie chart,
// passes in the data and draws it..
function drawDashboard() {

// Create our data table.
var data = google.visualization.arrayToDataTable([
['Secteur', 'Nombre des étudiants'],
['Analyse des données et ingénierie de la décision ' , 5],
['Communication digitale expertise web réseaux sociaux ', 7],
['Gouvernance de l’information en organisation. Gestion électronique des documents, Dématérialisation des archives', 7],
['Stratégie digitale et management des entreprises ', 7],
['Gestions des projets numériques ', 2]

]);

// Create a dashboard.
var dashboard = new google.visualization.Dashboard(
   document.getElementById('dashboard_div'));

// Create a range slider, passing some options
var dashRangeSlider = new google.visualization.ControlWrapper({
'controlType': 'NumberRangeFilter',
'containerId': 'filter_div',
'options': {
   'filterColumnLabel': 'Nombre des étudiants'
}
});

// Create a pie chart, passing some options
var pieChart = new google.visualization.ChartWrapper({
'chartType': 'ColumnChart',
'containerId': 'chart_div',
'options': {
   'pieSliceText': 'value',
   'legend': 'left'
}
});

// Establish dependencies, declaring that 'filter' drives 'pieChart',
// so that the pie chart will only display entries that are let through
// given the chosen slider range.
dashboard.bind(dashRangeSlider, pieChart);

// Draw the dashboard.
dashboard.draw(data);
}