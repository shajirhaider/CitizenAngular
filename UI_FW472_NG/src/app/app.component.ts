import { Component, OnInit, ChangeDetectorRef, DoCheck, ElementRef, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { LoaderService } from './services/loader.service';
import { LocalStorageService } from './services/local-storage.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @Input('name') name: string;  
  title = 'Citizen Portal';
  username : string;
  showLoader: boolean;
  constructor(private loaderService: LoaderService, 
              private storageService: LocalStorageService, 
              private authService: AuthService,
              private cdr: ChangeDetectorRef,
              private router: Router,
              private route: ActivatedRoute,
              private eleRef: ElementRef) {}

    ngOnInit(): void {
        let prop = this.eleRef.nativeElement.getAttribute('name');
        switch (prop) {
            case "Search-Properties":
                this.router.navigate(['/pub/Search.aspx']);
                break;
            case "Search-Mobile-Sign":
                this.router.navigate(['/pub/SearchMobileSign.aspx']);
                break;
            default:
                this.router.navigate(['/']);
                break;
        } 
        this.loaderService.status.subscribe((val: boolean) => {
        this.showLoader = val;
    });

  
    this.authService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });

    this.authService.dataString$.subscribe( data => {
      this.username = data;
    });

  // getUserName(){
  //   if(this.storageService.getItem('username')){
  //     this.username = this.storageService.getItem('username')
  //   }
  //   else{
  //     this.username = ""
  //   }
  // }


  }
  public ngDoCheck(): void {
    this.cdr.detectChanges();
  }
}

