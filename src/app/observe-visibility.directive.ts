import { AfterViewInit, OnInit, OnDestroy, Directive, EventEmitter, Input, Output, ElementRef } from '@angular/core';
import { delay, debounceTime, filter, Subject } from 'rxjs';

@Directive({
  selector: '[observeVisibility]'
})
export class ObserveVisibilityDirective implements OnDestroy, OnInit, AfterViewInit {
  @Input() debounceTime = 0;
  @Input() delayTime = 0;
  @Input() threshold = 1.0
  
  @Output() visible = new EventEmitter<HTMLElement>();
  @Output() invisible = new EventEmitter<HTMLElement>();

  private observer: IntersectionObserver | undefined;
  private subject$ = new Subject<{
    entry: IntersectionObserverEntry;
    observer: IntersectionObserver;
  }>();
  private isNotVisible: Boolean = false;
  private timestamp: number = 0;

  options = {
    rootMargin: '0px',
    threshold: this.threshold,
  };

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.createObserver();
  }

  ngAfterViewInit() {
    this.startObservingElements();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }

    this.subject$.complete();
  }


  private startObservingElements() {
    if (!this.observer) {
      return;
    }

    this.observer.observe(this.element.nativeElement);

    this.subject$
      .pipe(
        // tap((a) => console.log("tab:" + a)),
        delay(200), 
        debounceTime(this.debounceTime),
        filter(({ entry, observer }) => {
          return !!observer
        })
        
        )
      .subscribe(async ({ entry, observer }) => {
        const target = entry.target as HTMLElement;
        const isStillVisible = await this.isVisible(target);
        // console.log('------target------')
        // console.log(target)
        // console.log(isStillVisible)
        if (this.isNotVisible !== isStillVisible) {
            // const passEnaughtTimeFromPreviosRun = this.timestamp == null || (Date.now()/1000 - this.timestamp/1000) > this.delayTime
            // if (isStillVisible && passEnaughtTimeFromPreviosRun) {
            //   this.visible.emit(target);
            // }

            if (isStillVisible) {
              console.log('------visible------')
              this.visible.emit(target);
            }else {
              console.log('------invisible------')
              this.invisible.emit(target);
            }
          
            
            // else {
            //   this.timestamp = Date.now() as number;
            //   this.invisible.emit(target);
            // }
        }

        this.isNotVisible = isStillVisible as Boolean;

        // console.log(isStillVisible)

      
        // if (isStillVisible) {
        //   this.visible.emit(target);
        //   observer.unobserve(target);
        // }
      });
  }

  private isVisible(element: HTMLElement) {
    return new Promise(resolve => {
      const observer = new IntersectionObserver(([entry]) => {
        // console.log('entry.intersectionRatio ',  entry.intersectionRatio)
        resolve(entry.intersectionRatio >= this.threshold);
        observer.disconnect();
      });

      observer.observe(element);
    });
  }

  private createObserver() {
    // const options = {
    //   rootMargin: '0px',
    //   threshold: this.threshold,
    // };

    // const isIntersecting = (entry: IntersectionObserverEntry) => entry.isIntersecting || entry.intersectionRatio > 0;



    // this.observer = new IntersectionObserver((entries, observer) => {

    // }, options);

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        console.log('entry.target')
        console.log(entry.target)
        
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          // observer.unobserve(entry.target)

          this.subject$.next({ entry, observer });
        }
      });
    }, this.options);
  }
}
