import {FiltersToolPanel} from "./sideBar/filter/filtersToolPanel";

export {ColumnSelectComp} from "./sideBar/columns/columnsSelect/columnSelectComp";
export {ToolPanelColumnComp} from "./sideBar/columns/columnsSelect/toolPanelColumnComp";
export {ColumnGroupComp} from "./sideBar/columns/columnsSelect/columnGroupComp";
export {AggregationStage} from "./rowStages/aggregationStage";
export {GroupStage} from "./rowStages/groupStage";
export {SetFilter} from "./setFilter/setFilter";
export {SetFilterModel} from "./setFilter/setFilterModel";
export {StatusBar} from "./statusBar/statusBar";
export {StatusBarService} from "./statusBar/statusBarService";
export {ClipboardService} from "./clipboardService";
export {EnterpriseBoot} from "./enterpriseBoot";
export {EnterpriseMenu} from "./menu/enterpriseMenu";
export {MenuItemComponent} from "./menu/menuItemComponent";
export {MenuList} from "./menu/menuList";
export {RangeController} from "./rangeController";
export {RowGroupColumnsPanel} from "./sideBar/columns/columnDrop/rowGroupColumnsPanel";
export {ContextMenuFactory} from "./menu/contextMenu";
export {ViewportRowModel} from "./rowModels/viewport/viewportRowModel";
export {RichSelectCellEditor} from "./rendering/richSelect/richSelectCellEditor";
export {RichSelectRow} from "./rendering/richSelect/richSelectRow";
export {VirtualList} from "./rendering/virtualList";
export {AbstractColumnDropPanel} from "./sideBar/columns/columnDrop/abstractColumnDropPanel";
export {PivotColumnsPanel} from "./sideBar/columns/columnDrop/pivotColumnsPanel";
export {SideBarComp} from "./sideBar/sideBarComp";
export {LicenseManager} from "./licenseManager";
export {PivotStage} from "./rowStages/pivotStage";
export {PivotColDefService} from "./rowStages/pivotColDefService";
export {PivotModePanel} from "./sideBar/columns/columnDrop/pivotModePanel";
export {AggFuncService} from "./aggregation/aggFuncService";
export {MD5} from "./license/md5";
export {SetFilterListItem} from "./setFilter/setFilterListItem";
export {ColumnComponent} from "./sideBar/columns/columnDrop/columnComponent";
export {ValuesColumnPanel} from "./sideBar/columns/columnDrop/valueColumnsPanel";
export {PivotCompFactory} from "./pivotCompFactory";
export {RowGroupCompFactory} from "./rowGroupCompFactory";
export {ExcelCreator} from "./exporter/excelCreator";
export {ExcelXmlFactory} from "./exporter/excelXmlFactory";

import {Grid} from "ag-grid-community";
import {EnterpriseMenuFactory} from "./menu/enterpriseMenu";
import {RangeController} from "./rangeController";
import {ClipboardService} from "./clipboardService";
import {GroupStage} from "./rowStages/groupStage";
import {AggregationStage} from "./rowStages/aggregationStage";
import {EnterpriseBoot} from "./enterpriseBoot";
import {ContextMenuFactory} from "./menu/contextMenu";
import {ViewportRowModel} from "./rowModels/viewport/viewportRowModel";
import {PivotColumnsPanel} from "./sideBar/columns/columnDrop/pivotColumnsPanel";
import {SideBarComp} from "./sideBar/sideBarComp";
import {RowGroupCompFactory} from "./rowGroupCompFactory";
import {LicenseManager} from "./licenseManager";
import {MD5} from "./license/md5";
import {PivotStage} from "./rowStages/pivotStage";
import {PivotColDefService} from "./rowStages/pivotColDefService";
import {AggFuncService} from "./aggregation/aggFuncService";
import {PivotCompFactory} from "./pivotCompFactory";
import {MenuItemMapper} from "./menu/menuItemMapper";
import {ExcelCreator} from "./exporter/excelCreator";
import {ExcelXmlFactory} from "./exporter/excelXmlFactory";
import {ServerSideRowModel} from "./rowModels/serverSide/serverSideRowModel";
import {ColumnSelectHeaderComp} from "./sideBar/columns/columnsSelect/columnSelectHeaderComp";
import {ColumnContainerComp} from "./sideBar/columns/columnsSelect/columnContainerComp";
import {HorizontalResizeComp} from "./sideBar/horizontalResizeComp";
import {HeaderColumnDropComp} from "./sideBar/columns/columnDrop/headerColumnDropComp";
import {ColumnToolPanel} from "./sideBar/columns/columnToolPanel";
import {SideBarSelectComp} from "./sideBar/sideBarSelectComp";

import {StatusBarService} from "./statusBar/statusBarService";
import {StatusBar} from "./statusBar/statusBar";
import {AggregationComp} from "./statusBar/providedPanels/aggregationComp"

import {NameValueComp} from "./statusBar/providedPanels/nameValueComp";
import {SelectedComp} from "./statusBar/providedPanels/selectedComp"
import {TotalComp} from "./statusBar/providedPanels/totalRowCountComponent"
import {FilteredComp} from "./statusBar/providedPanels/filteredComp"
import {TotalAndFilteredComp} from "./statusBar/providedPanels/totalAndFilteredComp"

let rowModelTypes = {viewport: ViewportRowModel, serverSide: ServerSideRowModel};

Grid.setEnterpriseBeans([EnterpriseMenuFactory, ExcelCreator, ExcelXmlFactory, RowGroupCompFactory, PivotCompFactory,
    PivotColumnsPanel, RangeController, ClipboardService, PivotStage, PivotColDefService,
    ContextMenuFactory, GroupStage, AggregationStage, EnterpriseBoot, AggFuncService,
    LicenseManager, MD5, MenuItemMapper, StatusBarService], rowModelTypes);

Grid.setEnterpriseComponents([
    {componentName: 'AgColumnSelectHeader', theClass: ColumnSelectHeaderComp},
    {componentName: 'AgColumnContainer', theClass: ColumnContainerComp},
    {componentName: 'AgHorizontalResize', theClass: HorizontalResizeComp},
    {componentName: 'AgSideBar', theClass: SideBarComp},

    {componentName: 'AgStatusBar', theClass: StatusBar},
    {componentName: 'AgSumAggregationComp', theClass: NameValueComp},
    {componentName: 'AgCountAggregationComp', theClass: NameValueComp},
    {componentName: 'AgMinAggregationComp', theClass: NameValueComp},
    {componentName: 'AgMaxAggregationComp', theClass: NameValueComp},
    {componentName: 'AgAvgAggregationComp', theClass: NameValueComp},
    {componentName: 'AgSelectedRowCountComp', theClass: NameValueComp},

    {componentName: 'AgHeaderColumnDrop', theClass: HeaderColumnDropComp},
    {componentName: 'AgToolPanelColumnComp', theClass: ColumnToolPanel},
    {componentName: 'AgToolPanelAllFiltersComp', theClass: FiltersToolPanel},
    {componentName: 'AgToolPanelSelectComp', theClass: SideBarSelectComp},
]);

Grid.setEnterpriseDefaultComponents([
    {componentName: 'agAggregationComponent', theClass: AggregationComp},
    {componentName: 'agColumnsToolPanel', theClass: ColumnToolPanel},
    {componentName: 'agFiltersToolPanel', theClass: FiltersToolPanel},
    {componentName: 'agSelectedRowCountComponent', theClass: SelectedComp},
    {componentName: 'agTotalRowCountComponent', theClass: TotalComp},
    {componentName: 'agFilteredRowCountComponent', theClass: FilteredComp},
    {componentName: 'agTotalAndFilteredRowCountComponent', theClass: TotalAndFilteredComp}
]);