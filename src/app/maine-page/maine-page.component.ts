import { data } from 'autoprefixer';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ManagedataService } from '../managedata.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-maine-page',
  templateUrl: './maine-page.component.html',
  styleUrls: ['./maine-page.component.scss'],
})
export class MainePageComponent implements OnInit, AfterViewInit {
  mytable: any[] = [
    {
      name: 'jasmin',
      email: 'example@gmail.com',
      phone: '+9803232',
      status: 'The best in his work',
      job: 'developer',
      choosfile: 'any',
    },
    {
      name: 'daniel',
      email: 'example@gmail.com',
      phone: '+9806565',
      status: 'The best in his work',
      job: 'quality assurance',
      choosfile: 'any',
    },
    {
      name: 'peny',
      email: 'example@gmail.com',
      phone: '+9801212',
      status: 'The best in his work',
      job: 'teacher',
      choosfile: 'any',
    },
    {
      name: 'jams',
      email: 'example@gmail.com',
      phone: '+98042',
      status: 'The best in his work',
      job: 'coach',
      choosfile: 'any',
    },
    {
      name: 'david',
      email: 'example@gmail.com',
      phone: '+98033',
      status: 'The best in his work',
      job: 'Dentist',
      choosfile: 'any',
    },
    {
      name: 'jason',
      email: 'example@gmail.com',
      phone: '+980128',
      status: 'The best in his work',
      job: 'developer',
      choosfile: 'any',
    },
    {
      name: 'mostafa',
      email: 'example@gmail.com',
      phone: '+98097',
      status: 'The best in his work',
      job: 'coach',
      choosfile: 'any',
    },
    {
      name: 'rezi',
      email: 'example@gmail.com',
      phone: '+98098',
      status: 'The best in his work',
      job: 'quality assurance',
      choosfile: 'any',
    },
    {
      name: 'jamsem',
      email: 'example@gmail.com',
      phone: '+98099',
      status: 'The best in his work',
      job: 'coach',
      choosfile: 'any',
    },
  ];
  selectedRows: string[] = [];
  selectedRowsForDeleting: string[] = [];
  cereateFake?: boolean = true;
  displayedColumns: string[] = ['name', 'phone', 'job', 'status', 'delete'];
  dataSource: any;
  data: any;
  edit = false;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private _manageDataService: ManagedataService,
    private _router: Router,
    private sanitizer:DomSanitizer
  ) {}

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  ngOnInit(): void {

    history.state.data != undefined
      ? history.state.data.careate == false
        ? (this.cereateFake = false)
        : null
      : null;
    if (this.cereateFake) {
      let localdata: any = localStorage.getItem('userData');
      if (localdata) {
        this.dataSource = new MatTableDataSource(JSON.parse(localdata));
      } else {
        this.dataSource = new MatTableDataSource(this.mytable);
      }
    }
    if (
      history.state.data != undefined &&
      history.state.data.careate == false
    ) {
      if (history.state.data.dataOne) {
        if (localStorage.getItem('userData') == null) {
          localStorage.setItem('userData', JSON.stringify(this.mytable));
        }
        let infodata: any = localStorage.getItem('userData');
        infodata = JSON.parse(infodata);
        infodata.push(history.state.data.dataOne);
        localStorage.setItem('userData', JSON.stringify(infodata));
        this.dataSource = new MatTableDataSource(infodata);
      } else if (history.state.data.dataFinall) {
        if (localStorage.getItem('userData') == null) {
          localStorage.setItem('userData', JSON.stringify(this.mytable));
        }
        let infodata: any = localStorage.getItem('userData');
        infodata = JSON.parse(infodata);
        infodata.push(history.state.data.dataFinall);
        localStorage.setItem('userData', JSON.stringify(infodata));
        this.dataSource = new MatTableDataSource(infodata);
      }
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  router() {
    this._router.navigate(['/Add'], {
      state: {
        data: {
          clearInfo: true,
        },
      },
    });
  }
  removeCart(a: any) {
    this.dataSource.data.map((z: any , index:number) => {
      if (z.phone == a.phone) {
        this.dataSource.data.splice(index ,1)
      } 
    });
    this.dataSource._updateChangeSubscription(); 
  } 
  dwonloadCart(data:any) {
    var sJson = JSON.stringify(data);
    var element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
    element.setAttribute('download', "primer-server-task.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); 
    document.body.removeChild(element);
}
}
