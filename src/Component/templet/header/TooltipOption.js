import React from 'react'
const style = {
    tooltipOptions: {
      fontSize: "13px",
      cursor: "pointer",
    },
  };
const TooltipOption = ({ options }) => {
    return (
      <div
        style={{
          height: "200px",
          width: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "10px 5px",
        }}
      >
        {options.map((e, i) => (
          <span key={i} style={style.tooltipOptions}>
            {e}
          </span>
        ))}
      </div>
    );
  };

export default TooltipOption
