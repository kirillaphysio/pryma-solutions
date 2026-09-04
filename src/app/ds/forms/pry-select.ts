import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PryIcon } from '../brand/icon/pry-icon';

export interface PrySelectOption {
  value: string;
  label: string;
}

let uid = 0;

/** Native select styled to the field well, with a Lucide chevron. Options accept strings. */
@Component({
  selector: 'pry-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PryIcon],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PrySelect), multi: true },
  ],
  template: `
    @if (label()) {
      <label class="pry-field__label" [attr.for]="fid">
        {{ label() }}@if (required()) {<span class="pry-field__req" aria-hidden="true">*</span>}
      </label>
    }
    <div class="pry-field__well">
      <select
        class="pry-field__select"
        [class.is-placeholder]="!value()"
        [class.has-error]="!!error()"
        [id]="fid"
        [attr.name]="name() || null"
        [required]="required()"
        [disabled]="disabled()"
        [attr.aria-invalid]="error() ? true : null"
        [value]="value()"
        (change)="onSelect($event)"
        (blur)="onTouched()"
      >
        @if (placeholder()) {
          <option value="">{{ placeholder() }}</option>
        }
        @for (o of normalized(); track o.value) {
          <option [value]="o.value">{{ o.label }}</option>
        }
      </select>
      <pry-icon class="pry-field__chevron" name="chevron-down" [size]="14" />
    </div>
    @if (error() || hint()) {
      <span class="pry-field__msg" [class.is-error]="!!error()">{{ error() || hint() }}</span>
    }
  `,
  styleUrl: './pry-field.scss',
})
export class PrySelect implements ControlValueAccessor {
  readonly label = input<string>('');
  readonly placeholder = input<string>('');
  readonly name = input<string>('');
  readonly hint = input<string>('');
  readonly error = input<string>('');
  readonly required = input(false);
  readonly options = input<(string | PrySelectOption)[]>([]);

  protected readonly fid = `pry-sel-${uid++}`;
  protected readonly value = signal('');
  protected readonly disabled = signal(false);

  protected normalized(): PrySelectOption[] {
    return this.options().map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  }

  private onChange: (v: string) => void = () => {};
  protected onTouched: () => void = () => {};

  protected onSelect(e: Event) {
    const v = (e.target as HTMLSelectElement).value;
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
