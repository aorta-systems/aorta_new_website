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
        delay(150), 
        debounceTime(this.debounceTime),
        filter(({ entry, observer }) => {
          return !!observer
        })
        
        )
      .subscribe(async ({ entry, observer }) => {
        const target = entry.target as HTMLElement;
        const isStillVisible = await this.isVisible(target);

        if (this.isNotVisible !== isStillVisible) {
            if (isStillVisible) {
              this.visible.emit(target);
            }else {
              this.invisible.emit(target);
            }
        }

        this.isNotVisible = isStillVisible as Boolean;
      });
  }

  private isVisible(element: HTMLElement) {
    return new Promise(resolve => {
      const observer = new IntersectionObserver(([entry]) => {
        resolve(entry.intersectionRatio >= this.threshold);
        observer.disconnect();
      });

      observer.observe(element);
    });
  }

  private createObserver() {
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          this.subject$.next({ entry, observer });
        }
      });
    }, this.options);
  }
}
