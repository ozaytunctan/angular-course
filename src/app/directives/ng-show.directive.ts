import {Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ngShow]',
  standalone: true
})
export class NgShowDirective {

  private _context = new NgShowContext<any>();

  private _thenTemplateRef: TemplateRef<NgShowContext<any>> | null = null;
  private _elseTemplateRef: TemplateRef<NgShowContext<any>> | null = null;
  private _thenViewRef: EmbeddedViewRef<NgShowContext<any>> | null = null;
  private _elseViewRef: EmbeddedViewRef<NgShowContext<any>> | null = null;

  constructor(
    private templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef) {
    this._thenTemplateRef = templateRef;
  }

  @Input() set ngShow(condition: boolean | any) {
    this._context.$implicit = condition;
    this._updateView();
  }

  @Input() set ngShowElse(templateRef: TemplateRef<any> | null) {
    this._elseTemplateRef = templateRef;
    this._elseViewRef = null; // clear previous view if any.
    this._updateView();
  }

  @Input() set ngShowThen(templateRef: TemplateRef<any> | null) {
    this._thenTemplateRef = templateRef;
    this._elseViewRef = null; // clear previous view if any.
    this._updateView();
  }

  private _updateView() {
    if (this._context.$implicit) {
      if (!this._thenViewRef) {
        this._viewContainer.clear();
        this._elseViewRef = null;
        if (this._thenTemplateRef) {
          this._thenViewRef = this._viewContainer.createEmbeddedView(
            this._thenTemplateRef,
            this._context,
          );
        }
      }
    } else {
      if (!this._elseViewRef) {
        this._viewContainer.clear();
        this._thenViewRef = null;
        if (this._elseTemplateRef) {
          this._elseViewRef = this._viewContainer.createEmbeddedView(
            this._elseTemplateRef,
            this._context,
          );
        }
      }
    }

  }

}

export class NgShowContext<T = unknown> {
  public $implicit: T = null!;
  public ngShow: T = null!;
}
