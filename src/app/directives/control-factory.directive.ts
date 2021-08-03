import { Directive, Input, ViewContainerRef, ComponentFactoryResolver, OnChanges, NgModuleFactory, Type, OnInit } from '@angular/core';

@Directive({
  selector: '[app-control-factory]'
})
export class ControlFactoryDirective implements OnChanges, OnInit {

  @Input() public widgetName: string = '';
  @Input() public previewMode: boolean = false;
  @Input() public params: any;
  public componentRef: any;
  constructor(private viewContainerRef: ViewContainerRef,
              private cfr: ComponentFactoryResolver,) { 

  }

  public ngOnInit() {
    this.componentRef = this.loadComponent(this.viewContainerRef);
  }

  public ngOnChanges() {
    this.widgetName = `${this.widgetName}Component`;
    // const factories = Array.from(this.componentFactoryResolver['_factories'].keys());
  }

  async loadComponent(vcr: ViewContainerRef) {
    const { ImageWidgetComponent } = await import('../widgets/image-widget/image-widget.component');
    const { TextfieldWidgetComponent } = await import('../widgets/textfield-widget/textfield-widget.component');
    const { WelcomeWidgetComponent } = await import('../widgets/welcome-widget/welcome-widget.component');

    vcr.clear();
    let compRef = null;
    switch(this.widgetName) {
      case 'ImageWidgetComponent':
        compRef = vcr.createComponent(this.cfr.resolveComponentFactory(ImageWidgetComponent));
        compRef.instance.previewMode = this.previewMode;
        return compRef;
      case 'TextfieldWidgetComponent':
        compRef = vcr.createComponent(this.cfr.resolveComponentFactory(TextfieldWidgetComponent));
        compRef.instance.previewMode = this.previewMode;
        return compRef;
      case 'WelcomeWidgetComponent':
        compRef = vcr.createComponent(this.cfr.resolveComponentFactory(WelcomeWidgetComponent));
        compRef.instance.userSession = { id: 1, user: 'Christian Cardenas' };
        return compRef;
      default:
        return null;
        break;
    }
  }

}

