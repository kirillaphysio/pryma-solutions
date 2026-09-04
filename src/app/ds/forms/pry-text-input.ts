import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PryIcon } from '../brand/icon/pry-icon';

let uid = 0;

/**
 * Single-line field with the inset well, hairline ring and 4px radius. A ControlValueAccessor,
 * so it drops into a reactive form via formControlName. `error` shows the error ring + message.
 */
@Component({
  selector: 'pry-text-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PryIcon],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PryTextInput), multi: true },
  ],
  template: `
    @if (label()) {
      <label class="pry-field__label" [attr.for]="fid">
        {{ label() }}@if (required()) {<span class="pry-field__req" aria-hidden="true">*</span>}
      </label>
    }
    <div class="pry-field__well">
      @if (iconLeft()) {
        <pry-icon class="pry-field__icon" [name]="iconLeft()!" [size]="16" />
      }
      <input
        class="pry-field__input"
        [class.has-icon]="!!iconLeft()"
        [class.has-error]="!!error()"
        [id]="fid"
        [attr.name]="name() || null"
        [type]="type()"
        [attr.placeholder]="placeholder() || null"
        [required]="required()"
        [disabled]="disabled()"
        [attr.aria-invalid]="error() ? true : null"
        [attr.aria-describedby]="error() || hint() ? fid + '-msg' : null"
        [value]="value()"
        (input)="onInput($event)"
        (blur)="onTouched()"
      />
    </div>
    @if (error() || hint()) {
      <span class="pry-field__msg" [class.is-error]="!!error()" [id]="fid + '-msg'">{{ error() || hint() }}</span>
    }
  `,
  styleUrl: './pry-field.scss',
})
export class PryTextInput implements ControlValueAccessor {
  readonly label = input<string>('');
  readonly placeholder = input<string>('');
  readonly type = input('text');
  readonly name = input<string>('');
  readonly hint = input<string>('');
  readonly error = input<string>('');
  readonly required = input(false);
  readonly iconLeft = input<string | undefined>(undefined);

  protected readonly fid = `pry-in-${uid++}`;
  protected readonly value = signal('');
  protected readonly disabled = signal(false);

  private onChange: (v: string) => void = () => {};
  protected onTouched: () => void = () => {};

  protected onInput(e: Event) {
    const v = (e.target as HTMLInputElement).value;
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
