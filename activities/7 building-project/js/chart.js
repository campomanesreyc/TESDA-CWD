window.onload = () => {
  // Line Chart
  var lineChart = new CanvasJS.Chart("lineChartContainer", {
    animationEnabled: true,
    theme: "light2",
    data: [
      {
        type: "line",
        indexLabelFontSize: 16,
        dataPoints: [
          { y: 450 },
          { y: 414 },
          {
            y: 520,
            indexLabel: "\u2191 highest",
            markerColor: "red",
            markerType: "triangle",
          },
          { y: 460 },
          { y: 450 },
          { y: 500 },
          { y: 480 },
          { y: 480 },
          {
            y: 410,
            indexLabel: "\u2193 lowest",
            markerColor: "DarkSlateGrey",
            markerType: "cross",
          },
          { y: 500 },
          { y: 480 },
          { y: 510 },
        ],
      },
    ],
  });

  //   Stacked Bar Chart
  var stackedBarChart = new CanvasJS.Chart("stackedBarChartContainer", {
    animationEnabled: true,
    axisX: {
      interval: 1,
      intervalType: "year",
      valueFormatString: "YYYY",
    },
    axisY: {
      suffix: "%",
    },
    toolTip: {
      shared: true,
    },
    legend: {
      reversed: true,
      verticalAlign: "bottom",
      horizontalAlign: "bottom",
    },
    data: [
      {
        type: "stackedColumn100",
        name: "Real-Time",
        showInLegend: true,
        xValueFormatString: "YYYY",
        yValueFormatString: '#,##0"%"',
        dataPoints: [
          { x: new Date(2010, 0), y: 40 },
          { x: new Date(2011, 0), y: 50 },
          { x: new Date(2012, 0), y: 60 },
          { x: new Date(2013, 0), y: 61 },
          { x: new Date(2014, 0), y: 63 },
          { x: new Date(2015, 0), y: 65 },
          { x: new Date(2016, 0), y: 67 },
        ],
      },
      {
        type: "stackedColumn100",
        name: "Web Browsing",
        showInLegend: true,
        xValueFormatString: "YYYY",
        yValueFormatString: '#,##0"%"',
        dataPoints: [
          { x: new Date(2010, 0), y: 28 },
          { x: new Date(2011, 0), y: 18 },
          { x: new Date(2012, 0), y: 12 },
          { x: new Date(2013, 0), y: 10 },
          { x: new Date(2014, 0), y: 10 },
          { x: new Date(2015, 0), y: 7 },
          { x: new Date(2016, 0), y: 5 },
        ],
      },
      {
        type: "stackedColumn100",
        name: "File Sharing",
        showInLegend: true,
        xValueFormatString: "YYYY",
        yValueFormatString: '#,##0"%"',
        dataPoints: [
          { x: new Date(2010, 0), y: 15 },
          { x: new Date(2011, 0), y: 12 },
          { x: new Date(2012, 0), y: 10 },
          { x: new Date(2013, 0), y: 9 },
          { x: new Date(2014, 0), y: 7 },
          { x: new Date(2015, 0), y: 5 },
          { x: new Date(2016, 0), y: 1 },
        ],
      },
      {
        type: "stackedColumn100",
        name: "Others",
        showInLegend: true,
        xValueFormatString: "YYYY",
        yValueFormatString: '#,##0"%"',
        dataPoints: [
          { x: new Date(2010, 0), y: 17 },
          { x: new Date(2011, 0), y: 20 },
          { x: new Date(2012, 0), y: 18 },
          { x: new Date(2013, 0), y: 20 },
          { x: new Date(2014, 0), y: 20 },
          { x: new Date(2015, 0), y: 23 },
          { x: new Date(2016, 0), y: 27 },
        ],
      },
    ],
  });

  var dayLineChart = new CanvasJS.Chart("dayLineChartContainer", {
    backgroundColor: "#2196f3",
    animationEnabled: true,
    theme: "dark2",
    width: 400,
    height: 500,
    axisY: {
      interval: 2,
    },

    data: [
      {
        type: "line",
        indexLabelFontSize: 16,
        lineColor: "white",
        color: "white",
        dataPoints: [
          { y: 12, label: "Red" },
          { y: 19, label: "Blue" },
          { y: 3, label: "Yellow" },
          { y: 5, label: "Green" },
          { y: 2, label: "Purple" },
          { y: 3, label: "Orange" },
        ],
      },
    ],
  });

  var monthLineChart = new CanvasJS.Chart("monthLineChartContainer", {
    backgroundColor: "#2196f3",
    animationEnabled: true,
    theme: "dark2",
    width: 400,
    height: 500,
    axisY: {
      interval: 2,
    },

    data: [
      {
        type: "line",
        indexLabelFontSize: 16,
        lineColor: "white",
        color: "white",
        dataPoints: [
          { y: 5, label: "Red" },
          { y: 12, label: "Blue" },
          { y: 18, label: "Yellow" },
          { y: 9, label: "Green" },
          { y: 11, label: "Purple" },
          { y: 14, label: "Orange" },
        ],
      },
    ],
  });

  var yearLineChart = new CanvasJS.Chart("yearLineChartContainer", {
    backgroundColor: "#2196f3",
    animationEnabled: true,
    theme: "dark2",
    width: 400,
    height: 500,
    axisY: {
      interval: 5,
    },

    data: [
      {
        type: "line",
        indexLabelFontSize: 16,
        lineColor: "white",
        color: "white",
        dataPoints: [
          { y: 40, label: "Red" },
          { y: 36, label: "Blue" },
          { y: 24, label: "Yellow" },
          { y: 19, label: "Green" },
          { y: 30, label: "Purple" },
          { y: 23, label: "Orange" },
        ],
      },
    ],
  });

  var pieChart = new CanvasJS.Chart("pieChartContainer", {
    animationEnabled: true,
    height: 200,
    legend: {
      verticalAlign: "right",
    },
    data: [
      {
        type: "doughnut",
        startAngle: 60,
        innerRadius: 30,
        indexLabelFontSize: 17,
        indexLabel: "{label} - {y}",
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: [
          { y: 12, label: "Phone" },
          { y: 19, label: "Tablet" },
          { y: 3, label: "Laptop" },
          { y: 5, label: "Desktop" },
        ],
      },
    ],
  });

  //   Chart renders
  lineChart.render();
  stackedBarChart.render();
  dayLineChart.render();
  monthLineChart.render();
  yearLineChart.render();
  pieChart.render();
};
