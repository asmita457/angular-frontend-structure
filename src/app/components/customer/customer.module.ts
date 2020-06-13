import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from '../../modules/material.module';
import { ApiFactoryService } from 'src/app/services/api-factory/api-factory.service';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerPassbookComponent } from './customer-passbook/customer-passbook.component';


@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MaterialModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatChipsModule
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    declarations: [CustomerListComponent, CustomerCreateComponent, CustomerViewComponent, CustomerPassbookComponent],
    providers: [ApiFactoryService]
})


export class CustomerModule { }