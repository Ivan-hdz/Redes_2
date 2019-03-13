import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Topic} from '../../classes/Topic';
import {Mensaje} from '../../classes/Mensaje';
import {RouterService} from '../../../shared/services/router.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'num_mensajes'];
  dataSource: MatTableDataSource<Topic>;
  BASE_TOPIC_URL = '/foro/topic/';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public router: RouterService) {
    // Create 100 users
    const topics = [new Topic('Abeja'), new Topic('Burro'), new Topic('Delfin'), new Topic('Casa')];
    topics[0].mensajes.push(new Mensaje());
    topics[0].mensajes.push(new Mensaje());
    topics[0].mensajes.push(new Mensaje());
    topics[0].mensajes.push(new Mensaje());
    topics[1].mensajes.push(new Mensaje());
    topics[1].mensajes.push(new Mensaje());
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(topics);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
