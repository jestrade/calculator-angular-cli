
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule],
})
export class MaterialModule {
}