import "./ChartBars.css"

const ChartBar = (holdings) => {
    let barFilling = "0%";

    if(holdings.maxValue > 0){
        barFilling = Math.round((holdings.value / holdings.maxValue) * 100) + "%";
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFilling}}></div>
            </div>
            <div className="chart-bar__label">{holdings.label}</div>
        </div>
    ) 
};

export default ChartBar;