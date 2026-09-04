import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let uid = 0;

/** Multi-line field. Inherits the input's well, ring and 4px radius; vertically resizable. */
@Component({
  selector: 'pry-text-area',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PryTextArea), multi: true },
  ],
  template: `
    @if (label()) {
      <label class="pry-field__label" [attr.for]="fid">
        {{ label() }}@if (required()) {<span class="pry-field__req" aria-hidden="true">*</span>}
      </label>
    }
    <textarea
      class="pry-field__textarea"
      [class.has-error]="!!error()"
      [id]="fid"
      [attr.name]="name() || null"
      [rows]="rows()"
      [attr.placeholder]="placeholder() || null"
      [required]="required()"
      [disabled]="disabled()"
      [attr.aria-invalid]="error() ? true : null"
      [attr.aria-describedby]="error() || hint() ? fid + '-msg' : null"
      [value]="value()"
      (input)="onInput($event)"
      (blur)="onTouched()"
    ></textarea>
    @if (error() || hint()) {
      <span class="pry-field__msg" [class.is-error]="!!error()" [id]="fid + '-msg'">{{ error() || hint() }}</span>
    }
  `,
  styleUrl: './pry-field.scss',
})
export class PryTextArea implements ControlValueAccessor {
  readonly label = input<string>('');
  readonly placeholder = input<string>('');
  readonly name = input<string>('');
  readonly rows = input(4);
  readonly hint = input<string>('');
  readonly error = input<string>('');
  readonly required = input(false);

  protected readonly fid = `pry-ta-${uid++}`;
  protected readonly value = signal('');
  protected readonly disabled = signal(false);

  private onChange: (v: string) => void = () => {};
  protected onTouched: () => void = () => {};

  protected onInput(e: Event) {
    const v = (e.target as HTMLTextAreaElement).value;
    this.value.set(v);
    this.onChange(v);
  }

  writeValue(v: string): void {
    this.value.set(v ?? '');
  }
  registerOnChange(fn: (v: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}
