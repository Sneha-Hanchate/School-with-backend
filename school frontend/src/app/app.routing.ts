import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { NotesComponent } from './component/notes/notes.component';
import { HomeworkComponent } from './component/homework/homework.component';
import { TestComponent } from './component/test/test.component';
import { NoticeComponent } from './component/notice/notice.component';
import { MarkComponent } from './component/mark/mark.component';
import { HomeComponent } from './component/home/home.component';

const arr: Routes = [
  { path: 'component/register', component: RegisterComponent },
  { path: '', component: LoginComponent },

  {
    path: 'component/navbar',
    component: NavbarComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'notes', component: NotesComponent },
      { path: 'homework', component: HomeworkComponent },
      { path: 'test', component: TestComponent },
      { path: '', component: NoticeComponent },
      { path: 'mark', component: MarkComponent },
    ],
  },
];
export const arrRouting = RouterModule.forRoot(arr);
