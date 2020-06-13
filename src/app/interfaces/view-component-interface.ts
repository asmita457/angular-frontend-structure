export interface ViewComponentInterface {

    resourceName: any;
    baseUrl: any;
    id: any;
    data: any;
    viewDetails: any;

    prepareViewData(response);

    goBack();

    fetchData(url);
}
