const margin = { top: 70, right: 60, bottom: 50, left: 80 };
const width = 1200 - margin.left - margin.right;
const height = 700 - margin.top - margin.bottom;

// Set up the x and y scales

const x = d3.scaleTime().range([0, width]);

const y = d3.scaleLinear().range([height, 0]);

// Create the SVG element and append it to the chart container

const svg = d3
  .select("#chart-container")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

// Load and process the data

d3.csv("NTDOY.csv").then((data) => {
  // Parse the Date and convert the Close to a number
  const parseDate = d3.timeParse("%Y-%m-%d");
  console.log("Old date", data)
  
  data.forEach((d) => {
    d.Date = parseDate(d.Date);
    d.Close = +d.Close;
  });
  
  // console.log("new formated data", data);

  // // Set the domains for the x and y scales

  // x.domain(d3.extent(data, (d) => d.Date));
  // y.domain([0, d3.max(data, (d) => d.Close)]);

  // console.log(d3.extent(data, (d) => d.Date))

  // // Add the x-axis

  // svg
  //   .append("g")
  //   .attr("transform", `translate(0,${height})`)
  //   .call(d3.axisBottom(x));

  // // Add the y-axis

  // svg.append("g")
  // .attr("transform", `translate(${0},0)`)
  // .call(d3.axisLeft(y));
  // // Set up the line generator

  // const line = d3
  //   .line()
  //   .x((d) => x(d.Date))
  //   .y((d) => y(d.Close));

  // // Create an area generator

  // const area = d3
  //   .area()
  //   .x((d) => x(d.Date))
  //   .y0(height)
  //   .y1((d) => y(d.Close));

  // // Add the area path

  // svg
  //   .append("path")
  //   .datum(data)
  //   .attr("class", "area")
  //   .attr("d", area)
  //   .style("fill", "#fcba03")
  //   .style("opacity", 0.2);

  // // // Add the line path
  // svg
  //   .append("path")
  //   .datum(data)
  //   .attr("class", "line")
  //   .attr("fill", "none")
  //   .attr("stroke", "#fcba03")
  //   .attr("stroke-width", 1)
  //   .attr("d", line);
});
