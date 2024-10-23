import ChartBar from "./ChartBars";
import'./Chart.css';

const Chart = (holdings) => {
    const dataPointValues = holdings.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointValues)

    return(
        <div className="chart">
            {holdings.dataPoints.map(dataPoint =>( 
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value} 
                    maxValue={totalMax} 
                    label={dataPoint.label}
                />
            ))}
        </div>
    ) 

};

export default Chart;