# Shartify
Streaming server side restful chart api using express, `app.use()` and rejoice.  Uses [`nchart`](https://github.com/my-archives/nchart) and [`node-canvas`](https://github.com/chartjs/Chart.js) to make the badass charts, this is a simple wrapper for express.  Thanks really goes to their hard work.

# [Example Donut Chart](https://github.com/chartjs/Chart.js/blob/v1.1.1/docs/05-Pie-Doughnut-Chart.md)
```json
{
  "name": "example-donut-chart",
  "data": [
    {
      "value": 300,
      "color":"#F7464A",
      "highlight": "#FF5A5E",
      "label": "Red"
    },
    {
      "value": 50,
      "color": "#46BFBD",
      "highlight": "#5AD3D1",
      "label": "Green"
    },
    {
      "value": 100,
      "color": "#FDB45C",
      "highlight": "#FFC870",
      "label": "Yellow"
    },
    {
      "value": 40,
      "color": "#949FB1",
      "highlight": "#A8B3C5",
      "label": "Grey"
    },
    {
      "value": 120,
      "color": "#4D5360",
      "highlight": "#616774",
      "label": "Dark Grey"
    }
  ],
  "settings": {
    "scaleShowValues": true,
    "scaleFontSize": 24,
  }
}
```

----

# [Example Line Chart](https://github.com/chartjs/Chart.js/blob/v1.1.1/docs/01-Line-Chart.md)
```json
{
  "name": "example-line-chart",
  "data": {
    "labels": ["January", "February", "March", "April", "May", "June", "July"],
    "datasets": [
      {
        "label": "My First dataset",
        "fillColor": "rgba(220,220,220,0.2)",
        "strokeColor": "rgba(220,220,220,1)",
        "pointColor": "rgba(220,220,220,1)",
        "pointStrokeColor": "#fff",
        "pointHighlightFill": "#fff",
        "pointHighlightStroke": "rgba(220,220,220,1)",
        "data": [65, 59, 80, 81, 56, 55, 40]
    },
    {
        "label": "My Second dataset",
        "fillColor": "rgba(151,187,205,0.2)",
        "strokeColor": "rgba(151,187,205,1)",
        "pointColor": "rgba(151,187,205,1)",
        "pointStrokeColor": "#fff",
        "pointHighlightFill": "#fff",
        "pointHighlightStroke": "rgba(151,187,205,1)",
        "data": [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  }
}
```
----


# [Example Bar Chart](https://github.com/chartjs/Chart.js/blob/v1.1.1/docs/02-Bar-Chart.md)
```json
{
  "name": "example-bar-chart",
  "data": {
    "labels": ["January", "February", "March", "April", "May", "June", "July"],
    "datasets": [
      {
        "label": "My First dataset",
        "fillColor": "rgba(220,220,220,0.5)",
        "strokeColor": "rgba(220,220,220,0.8)",
        "highlightFill": "rgba(220,220,220,0.75)",
        "highlightStroke": "rgba(220,220,220,1)",
        "data": [65, 59, 80, 81, 56, 55, 40]
      },
      {
        "label": "My Second dataset",
        "fillColor": "rgba(151,187,205,0.5)",
        "strokeColor": "rgba(151,187,205,0.8)",
        "highlightFill": "rgba(151,187,205,0.75)",
        "highlightStroke": "rgba(151,187,205,1)",
        "data": [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  }
}
```
----


# [Example Radar Chart](https://github.com/chartjs/Chart.js/blob/v1.1.1/docs/03-Radar-Chart.md)
```json
{
  "name": "example-radar-chart",
  "data": {
    "labels": ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    "datasets": [
      {
        "label": "My First dataset",
        "fillColor": "rgba(220,220,220,0.2)",
        "strokeColor": "rgba(220,220,220,1)",
        "pointColor": "rgba(220,220,220,1)",
        "pointStrokeColor": "#fff",
        "pointHighlightFill": "#fff",
        "pointHighlightStroke": "rgba(220,220,220,1)",
        "data": [65, 59, 90, 81, 56, 55, 40]
      },
      {
        "label": "My Second dataset",
        "fillColor": "rgba(151,187,205,0.2)",
        "strokeColor": "rgba(151,187,205,1)",
        "pointColor": "rgba(151,187,205,1)",
        "pointStrokeColor": "#fff",
        "pointHighlightFill": "#fff",
        "pointHighlightStroke": "rgba(151,187,205,1)",
        "data": [28, 48, 40, 19, 96, 27, 100]
      }
    ]
  }
}
```
----


# [Example Polar Area Chart](https://github.com/chartjs/Chart.js/blob/v1.1.1/docs/04-Polar-Area-Chart.md)
```json
{
  "name": "polar-example-chart",
  "data": [
    {
      "value": 300,
      "color":"#F7464A",
      "highlight": "#FF5A5E",
      "label": "Red"
    },
    {
      "value": 50,
      "color": "#46BFBD",
      "highlight": "#5AD3D1",
      "label": "Green"
    },
    {
      "value": 100,
      "color": "#FDB45C",
      "highlight": "#FFC870",
      "label": "Yellow"
    },
    {
      "value": 40,
      "color": "#949FB1",
      "highlight": "#A8B3C5",
      "label": "Grey"
    },
    {
      "value": 120,
      "color": "#4D5360",
      "highlight": "#616774",
      "label": "Dark Grey"
    }
  ]
}
```

----
