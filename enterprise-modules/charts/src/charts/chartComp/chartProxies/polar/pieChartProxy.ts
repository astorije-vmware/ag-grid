import { AgChart, PolarChart } from "ag-charts-community";
import { ChartProxyParams, UpdateChartParams } from "../chartProxy";
import { PolarChartProxy } from "./polarChartProxy";
import { AgPolarChartOptions, AgPolarSeriesOptions } from "ag-charts-community/src/chart/agChartOptions";

export class PieChartProxy extends PolarChartProxy {

    public constructor(params: ChartProxyParams) {
        super(params);
        this.recreateChart();
    }

    protected createChart(): PolarChart {
        return AgChart.create({
            type: 'pie',
            container: this.chartProxyParams.parentElement,
            theme: this.chartTheme,
        });
    }

    public update(params: UpdateChartParams): void {
        const options: AgPolarChartOptions = {
            data: this.transformData(params.data, params.category.id),
            series: this.getSeries(params)
        }

        AgChart.update(this.chart as PolarChart, options);
    }

    private getSeries(params: UpdateChartParams): AgPolarSeriesOptions[] {
        const field = params.fields[0];
        return [{
                ...this.chartOptions[this.standaloneChartType].series,
                type: this.standaloneChartType,
                angleKey: field.colId,
                angleName: field.displayName!,
                labelKey: params.category.id,
                labelName: params.category.name,
        }];
    }
}