import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subscription } from "rxjs";
import { Observable, of } from 'rxjs';
import { ClarityModule } from "@clr/angular";
import { NavigationItem, NavigationService } from '../../shared/lib/navigation.service';

// import { MatMenuModule } from '@angular/material/menu';
// import { MatIconModule } from '@angular/material/icon';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav',
  templateUrl: './clarity-topbar.component.html',
  styleUrls: ['./clarity-topbar.component.css'],
})
export class ClarityTopbarComponent implements OnInit {
  pageTitle: Observable<string>;
  primaryNavigationItems: Observable<NavigationItem[]>;
  secondaryNavigationItems: Observable<NavigationItem[]>;
  navigationService:NavigationService;

  constructor(navigationService: NavigationService, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
    let newItem = new NavigationItem(5, "test item");
    navigationService.addSecondaryNavigationItem(newItem);
    this.primaryNavigationItems = navigationService.getPrimaryNavigationItems();
    this.secondaryNavigationItems = navigationService.getSecondaryNavigationItems();
    this.pageTitle = navigationService.getPageTitle();
  }

  ngOnInit() {
    // We need to add padding to the top of the page so that some of the page
    //  content doesn't end up behind the navigation bar
    this.renderer.setStyle(this.document.body, 'padding-top', '5em');
  }
  ngOnDestroy() {
    // this.queryCategories.unsubscribe();
  }
}
