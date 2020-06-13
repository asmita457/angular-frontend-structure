import { DialogData } from '../classes/dialog-data/dialog-data';
import { DialogResponseData } from '../classes/dialog-response-data/dialog-response-data';
import { FormGroup } from '@angular/forms';

export interface DialogComponentInterface {

    dialogData: DialogData;

    dialogResponseData: DialogResponseData;

    baseUrl: string;

    form: FormGroup;

    // Do the things before dialog close
    handleDialogClose()

    onSubmit(data);

    handlePostSuccess(data);

    handlePostError(err);

    handlePutSuccess(data);

    handlePutError(err);

    handlePostData(data);

    prepareViewData(response);

    fetchData(url);

}
