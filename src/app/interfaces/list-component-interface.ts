import { FormControl } from '@angular/forms';

export interface ListComponentInterface {

    resourceName;
    dataList: any;

    pageSizeOptions: any;
    filterObj: any;
    paginationModel;
    baseUrl: string;

    noDataPresent: boolean;
    totalDataLength: number;

    // No Data Present 
    noDataImage: string;
    noDataMessage: string;

    // Search
    searchFormControl: FormControl;
    searchModel: any;

    // Action menu
    actionMenuType: number;
    actionsMenuOptions: any;

    // Column Details - Define your component specific columns
    columnDetails: any;
    displayedColumns: any[];


    // Prepare listing data for showcasing
    prepareListData(data);

    // Call Get API 
    getList(url, pageIndex, pageSize, search, filterObj);

    // Handle Search Event for listing
    handleSearchInputEvent();

    // Pagination
    pageEvent(event);

    // Handle Menu Clicks 
    handleMenuClick(key, data);

    // Handle Create Data
    handleCreateData();

    // Handle View Data
    handleViewData(data);

    // Handle Update Data
    handleUpdateData(data);

    // Handle Delete Data
    handleDeleteData(data);

    // Handle Open Dialog
    handleOpenDialog(data);

    // Handle Created Data From Dialog
    handleDataCreatedFromDialog(data);

    // Handle Update Data Dialog
    handleDataUpdatedFromDialog(data);
}
