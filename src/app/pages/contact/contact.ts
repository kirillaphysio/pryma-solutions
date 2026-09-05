import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DOCUMENT } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  type FormControl,
} from '@angular/forms';
import { merge } from 'rxjs';
import { SeoService } from '../../core/seo.service';
import { PryRevealGroup } from '../../shared/reveal/reveal';
import {
  PryButton,
  PryCard,
  PryCheckList,
  PryContainer,
  PryEyebrow,
  PryIcon,
  PryMeshBackdrop,
  PrySelect,
  PryTextArea,
  PryTextInput,
  PryTextLink,
} from '../../ds';

const CONTACT_EMAIL = 'info@pryma-solutions.hu';

@Component({
  selector: 'pry-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    PryButton,
    PryCard,
    PryCheckList,
    PryContainer,
    PryEyebrow,
    PryIcon,
    PryMeshBackdrop,
    PrySelect,
    PryTextArea,
    PryTextInput,
    PryTextLink,
    PryRevealGroup,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly doc = inject(DOCUMENT);

  protected readonly email = CONTACT_EMAIL;
  protected readonly opened = signal(false);
  protected readonly copied = signal(false);
  protected readonly submittedName = signal('');

  constructor() {
    inject(SeoService).update({
      title: $localize`:@@seo.contact.title:Kapcsolat — Pryma Solutions`,
      description: $localize`:@@seo.contact.desc:Írd meg, mire lenne szükséged. Küldök egy rövid tervet és egy fix árat, jellemzően három munkanapon belül. Egy kapcsolattartó, felesleges körök nélkül.`,
      path: '/contact',
      image: '/og/contact.png',
    });
  }

  protected readonly nextItems = [
    $localize`:@@contact.next.item1:Visszaírok, mit érdemes először megcsinálni`,
    $localize`:@@contact.next.item2:Egy rövid terv és egy fix ár`,
    $localize`:@@contact.next.item3:Ha kell, egy fél órás beszélgetés`,
  ];

  protected readonly topicOptions = [
    $localize`:@@contact.topic.web:Weboldal`,
    $localize`:@@contact.topic.brand:Arculat`,
    $localize`:@@contact.topic.both:Weboldal és arculat`,
    $localize`:@@contact.topic.mkt:Marketing alapok`,
    $localize`:@@contact.topic.unsure:Még nem tudom`,
  ];

  protected readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    topic: [''],
    brief: ['', [Validators.required, Validators.minLength(20)]],
  });

  // Bridges the reactive form's value/status changes into the OnPush signal graph, so the
  // error bindings below re-evaluate when a field is edited, blurred or submitted.
  private readonly tick = toSignal(merge(this.form.valueChanges, this.form.statusChanges), {
    initialValue: null,
  });

  // Error text surfaces only once a control is touched, so the form is quiet on first paint.
  protected errorFor(name: 'name' | 'email' | 'brief'): string {
    this.tick(); // establish the reactive dependency for OnPush
    const c = this.form.controls[name] as FormControl;
    if (!c.touched || c.valid) return '';
    if (c.hasError('required')) {
      return {
        name: $localize`:@@contact.err.name.req:Add meg a neved.`,
        email: $localize`:@@contact.err.email.req:Add meg az e-mail címed.`,
        brief: $localize`:@@contact.err.brief.req:Írj pár sort arról, mivel foglalkozol.`,
      }[name];
    }
    if (name === 'email' && c.hasError('email')) {
      return $localize`:@@contact.err.email.invalid:Adj meg egy teljes e-mail címet.`;
    }
    if (name === 'brief' && c.hasError('minlength')) {
      return $localize`:@@contact.err.brief.min:Legalább 20 karakter, hogy tudjak mit válaszolni.`;
    }
    return '';
  }

  protected submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { name, email, topic, brief } = this.form.getRawValue();
    const subject = $localize`:@@contact.mail.subject:Ajánlatkérés – ${name}:name:`;
    const lines = [
      $localize`:@@contact.mail.name:Név: ${name}:name:`,
      $localize`:@@contact.mail.email:E-mail: ${email}:email:`,
    ];
    if (topic) lines.push($localize`:@@contact.mail.topic:Téma: ${topic}:topic:`);
    lines.push('', brief);
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;

    this.submittedName.set(name);
    this.opened.set(true);
    this.doc.defaultView?.location.assign(href);
  }

  // No-op whose sole purpose is to trigger OnPush change detection on blur, so a field's
  // error appears when the user leaves it (touched flips without a value/status change).
  protected refresh() {}

  protected reset() {
    this.form.reset({ name: '', email: '', topic: '', brief: '' });
    this.opened.set(false);
    this.copied.set(false);
  }

  protected async copyEmail() {
    try {
      await this.doc.defaultView?.navigator.clipboard.writeText(CONTACT_EMAIL);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      // Clipboard unavailable (older browser / denied) — the address is visible anyway.
    }
  }
}
