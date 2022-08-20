import ChartBar from './ChartBar';
import './Chart.css'
const Chart = props => {
    const maxValue = Math.max(...props.dataPoints.map(dp => dp.value));
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar
                value={dataPoint.value}
                maxValue={maxValue}
                label={dataPoint.label} />)}
        </div>
    )
}

export default Chart;