import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Topic} from '../../classes/Topic';
import {Mensaje} from '../../classes/Mensaje';
import {RouterService} from '../../../shared/services/router.service';
import {TopicService} from '../../services/topic.service';
import {UserService} from "../../../shared/services/user.service";
import {User} from "../../classes/User";

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  displayedColumns: string[] = ['nombre'];
  dataSource: MatTableDataSource<User>;
  BASE_TOPIC_URL = '/foro/topic/';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public router: RouterService, private usServ: UserService) {
    this.dataSource = new MatTableDataSource();

  }
  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.usServ.getOnlineUsers().subscribe((arr) => {
      if (arr) {
        this.dataSource = new MatTableDataSource(arr);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
