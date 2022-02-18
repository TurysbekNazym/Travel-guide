import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScotlandComponent } from './components/scotland/scotland.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'scotland', component: ScotlandComponent },
    { path: 'london', component: ScotlandComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
