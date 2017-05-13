
function initCalculator(htmlElement)
{
	var mainForm = document.createElement("form");

	var solarUsageLabel = document.createElement("label");
	solarUsageLabel.innerHTML = "Solar Usage:";
	mainForm.appendChild(solarUsageLabel);

	var solarUsageInput = document.createElement("input");
	solarUsageInput.type = "number";
	solarUsageInput.style = "padding-right:35px; text-align:right;";
	mainForm.appendChild(solarUsageInput);

	var solarUsageInputUnits = document.createElement("span");
	solarUsageInputUnits.style = "margin-left:-35px;";
	solarUsageInputUnits.innerHTML = "KWH";
	mainForm.appendChild(solarUsageInputUnits);

	mainForm.appendChild(document.createElement("br"));

	var solarMonthlyBillLabel = document.createElement("label");
	solarMonthlyBillLabel.innerHTML = "Monthly Bill:";
	mainForm.appendChild(solarMonthlyBillLabel);

	var solarMonthlyBill = document.createElement("input");
	solarMonthlyBill.type = "number";
	solarMonthlyBill.style = "padding-right:35px; text-align:right;";
	mainForm.appendChild(solarMonthlyBill);
	htmlElement.append(mainForm);

	var solarMonthlyBillUnits = document.createElement("span");
	solarMonthlyBillUnits.style = "margin-left:-35px;";
	solarMonthlyBillUnits.innerHTML = "KES";
	mainForm.appendChild(solarMonthlyBillUnits);

	mainForm.appendChild(document.createElement("br"));

	var solarSetupTypeLabel = document.createElement("label");
	solarSetupTypeLabel.innerHTML = "Setup:";
	mainForm.appendChild(solarSetupTypeLabel);

	var gridTieSetupType = document.createElement("input");
	gridTieSetupType.type = "radio";
	gridTieSetupType.name= "setupType";
	gridTieSetupType.id = "gridTie";
	mainForm.appendChild(gridTieSetupType);

	var gridTieSetupTypeLabel = document.createElement("label");
	gridTieSetupTypeLabel.for = "gridTie";
	gridTieSetupTypeLabel.innerHTML = "Grid Tie";
	mainForm.appendChild(gridTieSetupTypeLabel);

	var hybridSetupType = document.createElement("input");
	hybridSetupType.type = "radio";
	hybridSetupType.name = "setupType";
	hybridSetupType.id = "hybrid";
	mainForm.appendChild(hybridSetupType);

	var hybridSetupTypeLabel = document.createElement("label");
	hybridSetupTypeLabel.for = "hybrid";
	hybridSetupTypeLabel.innerHTML = "Hybrid";
	mainForm.appendChild(hybridSetupTypeLabel);

	mainForm.appendChild(document.createElement("br"));

	var powerCapacityRangeLabel = document.createElement("label");
	powerCapacityRangeLabel.innerHTML = "Power Capacity:";
	mainForm.appendChild(powerCapacityRangeLabel);

	var powerCapacityRange = document.createElement("input");
	powerCapacityRange.type = "range";
	mainForm.appendChild(powerCapacityRange);

	mainForm.appendChild(document.createElement("br"));

	var financingEnabledLabel = document.createElement("label");
	financingEnabledLabel.innerHTML = "Use Financing: ";
	mainForm.appendChild(financingEnabledLabel);

	var financingEnabled = document.createElement("input");
	financingEnabled.type = "checkbox";
	mainForm.appendChild(financingEnabled);

	mainForm.appendChild(document.createElement("br"));

	var financingContainer = document.createElement("div");
	mainForm.appendChild(financingContainer);

	var financingLabel = document.createElement("label");
	financingLabel.innerHTML = "Financing Options: ";
	financingContainer.appendChild(financingLabel);

	var financingDuration = document.createElement("select");

	{
		var durationOption1 = document.createElement("option");
		durationOption1.value = "12mo";
		durationOption1.innerHTML = "12 mo";
		financingDuration.appendChild(durationOption1);
	}

	financingContainer.appendChild(financingDuration);

	mainForm.appendChild(document.createElement("br"));

	{
		var svg = document.createElement("svg");
		mainForm.appendChild(svg);

		var margins = { top: 80, right: 80, bottom: 80, left: 80 };
		var width = 1000 - margins.left - margins.right;
		var height = 1000 - margins.top - margins.bottom;

		var g = document.createElement("g");
		g.transform = "translate(" + margins.left + "," + margins.top + ")";
		var graph = svg.appendChild(g);


		var data = [3, 6, 2, 7, 5, 2, 0, 3, 8, 9, 2, 5, 9, 3, 6, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 2, 7];

		// X scale will fit all values from data[] within pixels 0-w
		var x = d3.scaleLinear().domain([0, data.length]).range([0, width]);
		// Y scale will fit values from 0-10 within pixels h-0 (Note the inverted domain for the y-scale: bigger is up!)
		var y = d3.scaleLinear().domain([0, 10]).range([height, 0]);

		// create a line function that can convert data[] into x and y points
		var line = d3.line()
			
		// assign the X function to plot our line as we wish
		.x(function(d,i) { 
			// verbose logging to show what's actually being done
			console.log('Plotting X value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
			// return the X coordinate where we want to plot this datapoint
			return x(i); 
		})
		.y(function(d) { 
			// verbose logging to show what's actually being done
			console.log('Plotting Y value for data point: ' + d + ' to be at: ' + y(d) + " using our yScale.");
			// return the Y coordinate where we want to plot this datapoint
			return y(d); 
		});

		// create yAxis
		g.append("g")
       .attr("class", "axis axis--x")
       .attr("transform", "translate(0," + height + ")")
       .call(d3.axisBottom(x));

		// create left yAxis
		var yAxisLeft = d3.svg.axis().scale(y).ticks(4).orient("left");
		// Add the y-axis to the left
		graph.append("svg:g")
		      .attr("class", "y axis")
		      .attr("transform", "translate(-25,0)")
		      .call(yAxisLeft);
		
		// Add the line by appending an svg:path element with the data line we created above
		// do this AFTER the axes above so that the line is above the tick-lines
		graph.append("svg:path").attr("d", line(data));
  	}
//	htmlElement.append('\
//	<form action="" id="solarform" oninput="powerCapacityRangeLabel.value = powerCapacityRange.valueAsNumber;">\
//			<label>Solar Usage:</label><input style="padding-right:35px; text-align:right;" type="number"/><span style="margin-left:-35px;">KWH</span><BR/>\
//			<label>Monthly Bill:</label><input style="padding-right:35px; text-align:right;" type="number"/><span style="margin-left:-35px;">Ksh</span><BR/>\
//			<label>Setup:</label><input type="radio" name="setuptype"> Grid Tie  <input type="radio" name="setuptype"> Hybrid<BR/>\
//			<label>Power Capacity:</label><input type="range" name="powerCapacityRange"/><output for="powerCapacityRange" name="powerCapacityRangeLabel"></output>\
//	</form>');
	// Solar Usage: [             KWH]
	// Monthly Bill: [            KES]
	// Setup: [ ] Grid Tie [ ] Hybrid
	// Power Capacity [------|-------] xxxx kW
	// Financing Options: [duration] @ [interest]
	//
	//
	//
	// [line chart with 2 lines, payment with solar + without]
	// 
	// [pie chart of power bill bdown without] [pie chart of power bill bdown with]
	//
	// [I WANT THIS SETUP] <- if options are different from page default takes you to the right product

}

function calculateEffectiveCapacity(solarKWH, hasBattery)
{
	efficiency = 0.40;
	if (hasBattery == "true")
		efficiency = 0.9;
	return solarKWH * efficiency;
}

function calculateDateOfRecovery(solarSystemCost, solarKWH, hasBattery, normalUsageKWH)
{
	normalUsageCost = calculateCostFromKWH(normalUsageKWH);
	solarUsageCost = calculateCostFromKWH(normalUsageKWH - calculateEffectiveCapacity(solarKWH, hasBattery));

	timeToRecover = solarSystemCost / (normalUsageCost - solarUsageCost);
	return timeToRecover;
}

function calculateAnnuityPayment(cost, interest, duration)
{
	return interest*cost/(1 - Math.pow(1 + interest, -duration));
}

function calculateDateOfRecoveryWithFinancing(solarSystemCost, solarKWH, hasBattery, normalUsageKWH, interest, duration)
{
	monthlyPayment = calculateAnnuityPayment(solarSystemCost, interest, duration);
	normalCost = calculateCostFromKWH(normalUsageKWH);
	solarCost = calculateCostFromKWH(normalUsageKWH - solarKWH*efficiency);

	if (solarCost + monthlyPayment > normalCost)
	{
		// means we are losing money for the lifetime of the annuity + then recouping
		amountLost = ((solarCost + monthlyPayment) - normalCost) * duration;
		return duration + calculateDateOfRecovery(amountLost, solarKWH, hasBattery, normalUsageKWH);
	}
	// we are already gaining money. We made our money back immediately, in fact we made our money
	// back in -ve time
	amountGained = (normalCost - (solarCost + monthlyPayment)) * duration;
	return calculateDateOfRecovery(-amountGained, solarKWH, hasBattery, normalUsageKWH);
}

stage1Tariff = 20;
stage1Limit = 100;
stage2Tariff = 50;
stage2Limit = 1000;
stage3Tariff = 100;
maxCostStage1 = stage1Tariff*stage1Limit;
maxCostStage2 = maxCostStage1 + stage2Tariff*(stage2Limit-stage1Limit);

function calculateCostFromKWH(kwhours)
{
	stage1Tariff = 2.50;
	stage1Limit = 50;
	stage2Tariff = 12.75;
	stage2Limit = 1500;
	stage3Tariff = 20.57;
	var consumptionCost;
	if (kwhours < stage1Limit)
		consumptionCost = kwhours * stage1Tariff;

	else if (kwhours < stage2Limit)
	{
		consumptionCost = 		
				stage1Limit * stage1Tariff + 
				(kwhours-stage1Limit) * stage2Tariff;
	}

	else
	{ 
		consumptionCost =
			maxCostStage1 + 
			maxCostStage2 + 
			(kwhours - stage1Limit - stage2Limit) * stage3Tariff;
	}

	// Fuel cost charge
	consumptionCost += kwhours * 8.00;
	// Foreign Exchange charge
	consumptionCost += kwhours * 1.0;
	// Inflation index
	consumptionCost += kwhours * 0.1;
	// VAT
	consumptionCost *= 1.16;
	// ERC
	consumptionCost += kwhours * 0.3;
	// REP
	consumptionCost += kwhours * stage1Tariff*0.05;

	return consumptionCost;
}