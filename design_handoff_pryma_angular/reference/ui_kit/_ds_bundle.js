/* @ds-bundle: {"format":4,"namespace":"PrymaDesignSystem_286b6c","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"MeshBackdrop","sourcePath":"components/brand/MeshBackdrop.jsx"},{"name":"MockupFrame","sourcePath":"components/brand/MockupFrame.jsx"},{"name":"TextLink","sourcePath":"components/brand/TextLink.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"TextArea","sourcePath":"components/forms/TextArea.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"PricingCard","sourcePath":"components/surfaces/PricingCard.jsx"},{"name":"StatCard","sourcePath":"components/surfaces/StatCard.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"20e1c4cd6a70","components/actions/IconButton.jsx":"951b3d4fa728","components/brand/Eyebrow.jsx":"bf7a7ed3b20c","components/brand/Icon.jsx":"ad4ce358bac1","components/brand/MeshBackdrop.jsx":"5bba91ebfa04","components/brand/MockupFrame.jsx":"0d00c640c939","components/brand/TextLink.jsx":"6450fdabeab7","components/brand/Wordmark.jsx":"80f50854b87f","components/forms/Select.jsx":"d690330d7e83","components/forms/TextArea.jsx":"efc2b2e6b160","components/forms/TextInput.jsx":"df247358f624","components/navigation/Footer.jsx":"38dbc56ddf2c","components/navigation/NavBar.jsx":"7ee2a793b1c9","components/surfaces/Card.jsx":"13e33cecaf5f","components/surfaces/PricingCard.jsx":"339fc21873bf","components/surfaces/StatCard.jsx":"69fe2b05363a","ui_kits/website/ContactScreen.jsx":"0cf75394d42a","ui_kits/website/DemoScreen.jsx":"4ed2a1c90043","ui_kits/website/HomeScreen.jsx":"83921c1f6e31","ui_kits/website/Intro.jsx":"7b877568dac4","ui_kits/website/ServicesScreen.jsx":"32b7de1bae82","ui_kits/website/demo-asztalos.jsx":"ae86e46d1cfd","ui_kits/website/demo-edzo.jsx":"5c87d0491a58","ui_kits/website/demo-kit.jsx":"5d37af67e4be","ui_kits/website/demo-szalon.jsx":"b1073b42ae61","ui_kits/website/shared.jsx":"476b49544273","ui_kits/website/tweaks-panel.jsx":"d259e3a86f73"},"inlinedExternals":[],"unexposedExports":[{"name":"fieldRing","sourcePath":"components/forms/TextInput.jsx"}]} */

(() => {

const __ds_ns = (window.PrymaDesignSystem_286b6c = window.PrymaDesignSystem_286b6c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
const PADS = {
  lg: '16px 32px',
  md: '14px 28px',
  cap: '10px 22px'
};
const TYPE = {
  lg: {
    fontSize: 'var(--button-lg-size)',
    lineHeight: 'var(--button-lg-lh)',
    letterSpacing: 'var(--button-lg-ls)'
  },
  md: {
    fontSize: 'var(--button-md-size)',
    lineHeight: 'var(--button-md-lh)',
    letterSpacing: 'var(--button-md-ls)'
  },
  cap: {
    fontSize: 'var(--button-cap-size)',
    lineHeight: 'var(--button-cap-lh)',
    letterSpacing: 'var(--button-cap-ls)'
  }
};
function skin(variant, hover, active) {
  switch (variant) {
    case 'secondary':
      return {
        background: hover ? 'var(--action-secondary-hover)' : 'var(--action-secondary)',
        color: 'var(--text-hi)',
        boxShadow: 'inset 0 0 0 1px var(--line-strong)',
        padding: '10px 30px'
      };
    case 'outline':
      return {
        background: 'transparent',
        color: hover ? 'var(--action-outline-hover)' : 'var(--action-outline)',
        boxShadow: hover ? 'var(--glow-cyan-md)' : 'inset 0 0 0 2px var(--line-cyan)'
      };
    case 'onAccent':
      return {
        background: hover ? 'rgba(255,255,255,.14)' : 'transparent',
        color: 'var(--text-on-accent)',
        boxShadow: 'inset 0 0 0 2px rgba(255,255,255,.7)'
      };
    case 'ghost':
      return {
        background: hover ? 'var(--surface-glass)' : 'transparent',
        color: hover ? 'var(--text-hi)' : 'var(--text-mute)',
        boxShadow: 'none'
      };
    default:
      return {
        background: active ? 'var(--action-primary-press)' : hover ? 'var(--action-primary-hover)' : 'var(--action-primary)',
        color: 'var(--text-on-accent)',
        boxShadow: hover ? 'var(--glow-pink-md)' : 'var(--glow-pink-sm)'
      };
  }
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  type = 'button',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = skin(variant, hover && !disabled, active && !disabled);
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-sm)',
    fontFamily: 'var(--font-ui)',
    fontWeight: 'var(--weight-bold)',
    padding: PADS[size],
    borderRadius: 'var(--radius-pill)',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transform: active && !disabled ? 'translateY(1px)' : 'translateY(0)',
    transition: 'background var(--dur-fast) var(--ease-out), box-shadow var(--dur-med) var(--ease-out), color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    opacity: disabled ? 0.42 : 1,
    filter: disabled ? 'saturate(.35)' : 'none',
    ...TYPE[size],
    ...s,
    ...style
  };
  const handlers = disabled ? {} : {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onClick
  };
  const inner = [iconLeft ? React.createElement('span', {
    key: 'il',
    style: {
      display: 'inline-flex'
    }
  }, iconLeft) : null, React.createElement('span', {
    key: 'l'
  }, children), iconRight ? React.createElement('span', {
    key: 'ir',
    style: {
      display: 'inline-flex'
    }
  }, iconRight) : null];
  if (href && !disabled) return React.createElement('a', {
    href,
    style: base,
    ...handlers,
    ...rest
  }, inner);
  return React.createElement('button', {
    type,
    style: base,
    disabled,
    ...handlers,
    ...rest
  }, inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  onClick,
  href,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const px = SIZES[size];
  const tone = variant === 'neon' ? {
    background: hover ? 'var(--action-primary-hover)' : 'var(--action-primary)',
    color: 'var(--text-on-accent)',
    boxShadow: hover ? 'var(--glow-pink-md)' : 'var(--glow-pink-sm)'
  } : variant === 'glass' ? {
    background: hover ? 'var(--action-secondary)' : 'var(--surface-glass)',
    color: 'var(--text-hi)',
    boxShadow: 'inset 0 0 0 1px var(--line-strong)'
  } : {
    background: hover ? 'var(--surface-glass)' : 'transparent',
    color: hover ? 'var(--text-hi)' : 'var(--text-mute)',
    boxShadow: 'none'
  };
  const props = {
    'aria-label': label,
    title: label,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: px,
      height: px,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      padding: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.42 : 1,
      transition: 'background var(--dur-fast) var(--ease-out), box-shadow var(--dur-med) var(--ease-out), color var(--dur-fast) var(--ease-out)',
      ...tone,
      ...style
    },
    ...rest
  };
  return href && !disabled ? React.createElement('a', {
    href,
    ...props
  }, children) : React.createElement('button', {
    type: 'button',
    disabled,
    ...props
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Eyebrow.jsx
try { (() => {
/** All-caps micro label — pill (chip) or bare (kicker above a headline). */
function Eyebrow({
  children,
  variant = 'pill',
  tone = 'violet',
  style,
  ...rest
}) {
  const tones = {
    violet: {
      color: 'var(--tone-violet-fg)',
      chip: 'var(--tone-violet-chip)',
      line: 'var(--tone-violet-line)'
    },
    pink: {
      color: 'var(--tone-pink-fg)',
      chip: 'var(--tone-pink-chip)',
      line: 'var(--tone-pink-line)'
    },
    cyan: {
      color: 'var(--tone-cyan-fg)',
      chip: 'var(--tone-cyan-chip)',
      line: 'var(--tone-cyan-line)'
    },
    onAccent: {
      color: 'rgba(255,255,255,.82)',
      chip: 'rgba(255,255,255,.14)',
      line: 'rgba(255,255,255,.34)'
    }
  };
  const t = tones[tone] || tones.violet;
  const type = {
    fontFamily: 'var(--font-ui)',
    fontWeight: 'var(--weight-bold)',
    fontSize: 'var(--micro-cap-size)',
    lineHeight: 'var(--micro-cap-lh)',
    letterSpacing: 'var(--micro-cap-ls)',
    textTransform: 'uppercase',
    color: t.color
  };
  if (variant === 'bare') return React.createElement('span', {
    style: {
      display: 'inline-block',
      alignSelf: 'flex-start',
      ...type,
      ...style
    },
    ...rest
  }, children);
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      alignSelf: 'flex-start',
      gap: 'var(--space-sm)',
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      background: t.chip,
      boxShadow: 'inset 0 0 0 1px ' + t.line,
      ...type,
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
const BASE = 'https://unpkg.com/lucide-static@0.544.0/icons/';

/** Lucide glyph rendered as a currentColor mask — recolourable, no inline path data. */
function Icon({
  name,
  size = 20,
  strokeAlign,
  color,
  style,
  ...rest
}) {
  const url = BASE + name + '.svg';
  return React.createElement('span', {
    'aria-hidden': 'true',
    'data-icon': name,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      backgroundColor: color || 'currentColor',
      WebkitMaskImage: 'url(' + url + ')',
      maskImage: 'url(' + url + ')',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      verticalAlign: strokeAlign === 'text' ? '-0.15em' : 'middle',
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/MeshBackdrop.jsx
try { (() => {
/** The signature atmosphere: neon mesh gradient + perspective grid + horizon line. Sits behind content, never around it. */
function MeshBackdrop({
  children,
  intensity = 'full',
  grid = true,
  horizon = false,
  minHeight,
  style,
  contentStyle,
  ...rest
}) {
  const strength = {
    soft: 0.45,
    full: 1,
    deep: 1.35
  }[intensity] ?? 1;
  return React.createElement('div', {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-page)',
      minHeight,
      isolation: 'isolate',
      ...style
    },
    ...rest
  }, [React.createElement('div', {
    key: 'mesh',
    'aria-hidden': 'true',
    style: {
      position: 'absolute',
      inset: '-10% -5%',
      opacity: strength,
      backgroundImage: 'var(--grad-mesh-pink), var(--grad-mesh-violet), var(--grad-mesh-cyan)',
      filter: 'blur(10px)',
      pointerEvents: 'none'
    }
  }), grid && React.createElement('div', {
    key: 'grid',
    'aria-hidden': 'true',
    style: {
      position: 'absolute',
      left: '-25%',
      right: '-25%',
      bottom: 0,
      height: '58%',
      backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
      backgroundSize: 'var(--grid-size) var(--grid-size)',
      transform: 'perspective(340px) rotateX(58deg)',
      transformOrigin: 'bottom center',
      maskImage: 'linear-gradient(to top, rgba(0,0,0,.85), transparent 76%)',
      WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,.85), transparent 76%)',
      pointerEvents: 'none'
    }
  }), horizon && React.createElement('div', {
    key: 'hz',
    'aria-hidden': 'true',
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: '42%',
      height: 1,
      background: 'var(--grad-brand)',
      boxShadow: 'var(--glow-pink-lg)',
      opacity: 0.8,
      pointerEvents: 'none'
    }
  }), React.createElement('div', {
    key: 'body',
    style: {
      position: 'relative',
      zIndex: 1,
      ...contentStyle
    }
  }, children)]);
}
Object.assign(__ds_scope, { MeshBackdrop });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/MeshBackdrop.jsx", error: String((e && e.message) || e) }); }

// components/brand/MockupFrame.jsx
try { (() => {
/** Floating product-UI frame: 12px radius, hairline, cyan/pink rim glow. Sits above the mesh, never inside a card. */
function MockupFrame({
  children,
  title = 'pryma.app',
  tone = 'cyan',
  aspect,
  tilt = false,
  style,
  ...rest
}) {
  const rim = tone === 'pink' ? 'var(--glow-pink-md)' : tone === 'violet' ? 'var(--glow-violet-md)' : 'var(--glow-cyan-md)';
  const dots = ['#ff5f57', '#febc2e', '#28c840'];
  return React.createElement('div', {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-card-solid)',
      boxShadow: rim + ', var(--elev-3)',
      transform: tilt ? 'perspective(1400px) rotateX(7deg) rotateZ(-1deg)' : 'none',
      aspectRatio: aspect,
      ...style
    },
    ...rest
  }, [React.createElement('div', {
    key: 'bar',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      padding: '10px var(--space-md)',
      background: 'var(--surface-chrome)',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, [React.createElement('div', {
    key: 'd',
    style: {
      display: 'flex',
      gap: 6
    }
  }, dots.map((c, i) => React.createElement('span', {
    key: i,
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: c,
      opacity: 0.65
    }
  }))), React.createElement('span', {
    key: 't',
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-sm-size)',
      color: 'var(--text-faint)',
      letterSpacing: 'var(--mono-sm-ls)',
      marginLeft: 'var(--space-sm)'
    }
  }, title)]), React.createElement('div', {
    key: 'b',
    style: {
      position: 'relative'
    }
  }, children)]);
}
Object.assign(__ds_scope, { MockupFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/MockupFrame.jsx", error: String((e && e.message) || e) }); }

// components/brand/TextLink.jsx
try { (() => {
/** Inline link. Cyan on dark surfaces; inherits white with a persistent underline on gradient bands. */
function TextLink({
  children,
  href = '#',
  tone = 'default',
  arrow = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const onAccent = tone === 'onAccent';
  return React.createElement('a', {
    href,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: arrow ? 'inline-flex' : 'inline',
      alignItems: arrow ? 'center' : undefined,
      gap: arrow ? 6 : undefined,
      color: onAccent ? 'var(--text-on-accent)' : hover ? 'var(--text-link-hover)' : 'var(--text-link)',
      fontWeight: onAccent ? 'var(--weight-bold)' : 'inherit',
      textDecoration: onAccent || hover ? 'underline' : 'none',
      textUnderlineOffset: '3px',
      textShadow: hover && !onAccent ? 'var(--glow-text-cyan)' : 'none',
      transition: 'color var(--dur-fast) var(--ease-out)',
      cursor: 'pointer',
      ...style
    },
    ...rest
  }, [children, arrow && React.createElement('span', {
    key: 'a',
    style: {
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  }, '\u2192')]);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
/** Type-only wordmark: PRYMA in display caps with a gradient prism bar. No logo file exists in the source material. */
function Wordmark({
  size = 22,
  tone = 'gradient',
  showBar = true,
  suffix = 'SOLUTIONS',
  style,
  ...rest
}) {
  const fill = tone === 'gradient' ? {
    background: 'var(--grad-neon-text)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent'
  } : {
    color: tone === 'mono' ? 'var(--text-hi)' : 'var(--pink-500)'
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: Math.round(size * 0.45),
      ...style
    },
    ...rest
  }, [showBar && React.createElement('span', {
    key: 'bar',
    style: {
      width: Math.round(size * 0.26),
      height: Math.round(size * 1.05),
      borderRadius: 'var(--radius-xs)',
      background: 'var(--grad-brand)',
      boxShadow: 'var(--glow-text-pink)',
      transform: 'skewX(-14deg)'
    }
  }), React.createElement('span', {
    key: 'mark',
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: size,
      letterSpacing: size * 0.06,
      lineHeight: 1,
      ...fill
    }
  }, 'PRYMA'), suffix && React.createElement('span', {
    key: 'sfx',
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: Math.max(9, Math.round(size * 0.42)),
      letterSpacing: '0.16em',
      color: 'var(--text-faint)',
      lineHeight: 1,
      paddingTop: 2
    }
  }, suffix)]);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
const FIELD = {
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'var(--font-ui)',
  fontSize: 'var(--body-md-size)',
  lineHeight: 'var(--body-md-lh)',
  color: 'var(--text-hi)',
  background: 'var(--surface-inset)',
  border: 'none',
  borderRadius: 'var(--radius-sm)',
  padding: '10px 12px',
  minHeight: 44,
  transition: 'box-shadow var(--dur-med) var(--ease-out), background var(--dur-fast) var(--ease-out)',
  outline: 'none'
};
function fieldRing(state) {
  if (state.error) return 'inset 0 0 0 1px var(--signal-error), 0 0 0 3px rgba(255,77,94,.16)';
  if (state.focus) return 'inset 0 0 0 1px var(--focus-ring), 0 0 0 3px var(--focus-halo)';
  if (state.hover) return 'inset 0 0 0 1px var(--line-strong)';
  return 'inset 0 0 0 1px var(--line-hairline)';
}
function TextInput({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  name,
  id,
  hint,
  error,
  disabled = false,
  required = false,
  iconLeft,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const fid = id || name || (label ? 'f-' + String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, [label && React.createElement('label', {
    key: 'l',
    htmlFor: fid,
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--caption-size)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-mute)',
      letterSpacing: 'var(--caption-ls)'
    }
  }, [label, required && React.createElement('span', {
    key: 'r',
    style: {
      color: 'var(--pink-500)',
      marginLeft: 4
    }
  }, '*')]), React.createElement('div', {
    key: 'w',
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, [iconLeft && React.createElement('span', {
    key: 'i',
    style: {
      position: 'absolute',
      left: 12,
      display: 'flex',
      color: 'var(--text-faint)',
      pointerEvents: 'none'
    }
  }, iconLeft), React.createElement('input', {
    key: 'i2',
    id: fid,
    name,
    type,
    value,
    placeholder,
    disabled,
    required,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...FIELD,
      paddingLeft: iconLeft ? 38 : 12,
      boxShadow: fieldRing({
        focus,
        hover,
        error
      }),
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? 'not-allowed' : 'text'
    },
    ...rest
  })]), (error || hint) && React.createElement('span', {
    key: 'h',
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--caption-size)',
      lineHeight: 'var(--caption-lh)',
      color: error ? 'var(--signal-error)' : 'var(--text-faint)'
    }
  }, error || hint)]);
}
Object.assign(__ds_scope, { fieldRing, TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/* Native popup lists cannot render translucent backgrounds, so the options get an
   opaque surface + explicit text colour instead of inheriting the inset well. */
const optionStyle = {
  background: 'var(--surface-card-solid)',
  color: 'var(--text-hi)'
};
function Select({
  label,
  value,
  onChange,
  options = [],
  placeholder,
  name,
  id,
  hint,
  error,
  disabled = false,
  required = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const fid = id || name;
  const items = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, [label && React.createElement('label', {
    key: 'l',
    htmlFor: fid,
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--caption-size)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-mute)',
      letterSpacing: 'var(--caption-ls)'
    }
  }, [label, required && React.createElement('span', {
    key: 'r',
    style: {
      color: 'var(--pink-500)',
      marginLeft: 4
    }
  }, '*')]), React.createElement('div', {
    key: 'w',
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, [React.createElement('select', {
    key: 's',
    id: fid,
    name,
    value,
    disabled,
    required,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-lh)',
      color: value ? 'var(--text-hi)' : 'var(--text-faint)',
      background: 'var(--surface-inset)',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 36px 10px 12px',
      minHeight: 44,
      boxShadow: __ds_scope.fieldRing({
        focus,
        hover,
        error
      }),
      outline: 'none',
      transition: 'box-shadow var(--dur-med) var(--ease-out)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    },
    ...rest
  }, [placeholder && React.createElement('option', {
    key: 'p',
    value: '',
    style: optionStyle
  }, placeholder), ...items.map(o => React.createElement('option', {
    key: o.value,
    value: o.value,
    style: optionStyle
  }, o.label))]), React.createElement('span', {
    key: 'c',
    'aria-hidden': 'true',
    style: {
      position: 'absolute',
      right: 12,
      width: 14,
      height: 14,
      pointerEvents: 'none',
      backgroundColor: 'var(--text-mute)',
      maskImage: 'url(https://unpkg.com/lucide-static@0.544.0/icons/chevron-down.svg)',
      WebkitMaskImage: 'url(https://unpkg.com/lucide-static@0.544.0/icons/chevron-down.svg)',
      maskSize: 'contain',
      WebkitMaskSize: 'contain',
      maskRepeat: 'no-repeat',
      WebkitMaskRepeat: 'no-repeat'
    }
  })]), (error || hint) && React.createElement('span', {
    key: 'h',
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--caption-size)',
      lineHeight: 'var(--caption-lh)',
      color: error ? 'var(--signal-error)' : 'var(--text-faint)'
    }
  }, error || hint)]);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextArea.jsx
try { (() => {
function TextArea({
  label,
  value,
  onChange,
  placeholder,
  name,
  id,
  rows = 4,
  hint,
  error,
  disabled = false,
  required = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const fid = id || name;
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, [label && React.createElement('label', {
    key: 'l',
    htmlFor: fid,
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--caption-size)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-mute)',
      letterSpacing: 'var(--caption-ls)'
    }
  }, [label, required && React.createElement('span', {
    key: 'r',
    style: {
      color: 'var(--pink-500)',
      marginLeft: 4
    }
  }, '*')]), React.createElement('textarea', {
    key: 't',
    id: fid,
    name,
    rows,
    value,
    placeholder,
    disabled,
    required,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      resize: 'vertical',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-lh)',
      color: 'var(--text-hi)',
      background: 'var(--surface-inset)',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 12px',
      outline: 'none',
      boxShadow: __ds_scope.fieldRing({
        focus,
        hover,
        error
      }),
      transition: 'box-shadow var(--dur-med) var(--ease-out)',
      opacity: disabled ? 0.5 : 1
    },
    ...rest
  }), (error || hint) && React.createElement('span', {
    key: 'h',
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--caption-size)',
      lineHeight: 'var(--caption-lh)',
      color: error ? 'var(--signal-error)' : 'var(--text-faint)'
    }
  }, error || hint)]);
}
Object.assign(__ds_scope, { TextArea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextArea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  columns = [],
  social = [],
  legal = '© 2026 Pryma Solutions. All rights reserved.',
  tagline,
  note = 'Built on the Pryma grid',
  onNavigate,
  style
}) {
  return React.createElement('footer', {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-void)',
      borderTop: '1px solid var(--line-hairline)',
      ...style
    }
  }, [React.createElement('div', {
    key: 'glow',
    'aria-hidden': 'true',
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 1,
      background: 'var(--grad-brand)',
      opacity: 0.7
    }
  }), React.createElement('div', {
    key: 'in',
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-64) var(--container-pad) var(--space-32)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-32) var(--space-48)'
    }
  }, [React.createElement('div', {
    key: 'b',
    style: {
      flex: '1 1 260px',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)'
    }
  }, [React.createElement(__ds_scope.Wordmark, {
    key: 'w',
    size: 20
  }), tagline && React.createElement('p', {
    key: 't',
    style: {
      fontSize: 'var(--caption-size)',
      lineHeight: 'var(--caption-lh)',
      color: 'var(--text-faint)',
      maxWidth: 260
    }
  }, tagline), social.length > 0 && React.createElement('div', {
    key: 's',
    style: {
      display: 'flex',
      gap: 'var(--space-sm)'
    }
  }, social.map(s => React.createElement(__ds_scope.IconButton, {
    key: s.icon,
    label: s.label,
    href: s.href,
    variant: 'glass',
    size: 'sm'
  }, React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 16
  }))))]), ...columns.map(col => React.createElement('div', {
    key: col.title,
    style: {
      flex: '1 1 160px',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)'
    }
  }, [React.createElement('span', {
    key: 'h',
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--micro-cap-size)',
      letterSpacing: 'var(--micro-cap-ls)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, col.title), ...col.links.map(l => React.createElement(FooterLink, {
    key: l.label,
    link: l,
    onNavigate
  }))]))]), React.createElement('div', {
    key: 'lg',
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-xl) var(--container-pad) var(--space-32)',
      borderTop: '1px solid var(--line-hairline)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-sm) var(--space-lg)',
      flexWrap: 'wrap',
      fontSize: 'var(--caption-size)',
      color: 'var(--text-faint)',
      letterSpacing: 'var(--caption-ls)'
    }
  }, [React.createElement('span', {
    key: 'c'
  }, legal), note && React.createElement('span', {
    key: 'm',
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-sm-size)',
      color: 'var(--text-faint)',
      opacity: .8
    }
  }, note)])]);
}
function FooterLink({
  link,
  onNavigate
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('a', {
    href: link.href,
    onClick: onNavigate ? e => {
      e.preventDefault();
      onNavigate(link.href);
    } : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontSize: 'var(--body-md-size)',
      color: hover ? 'var(--text-hi)' : 'var(--text-mute)',
      textDecoration: 'none',
      transition: 'color var(--dur-fast) var(--ease-out)'
    }
  }, link.label);
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/** True while the viewport is narrower than the given media query. */
function useMatch(query) {
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia(query);
    const h = e => setOn(e.matches);
    setOn(mq.matches);
    if (mq.addEventListener) {
      mq.addEventListener('change', h);
      return () => mq.removeEventListener('change', h);
    }
    mq.addListener(h);
    return () => mq.removeListener(h);
  }, [query]);
  return on;
}
function NavBar({
  links = [],
  activeHref,
  onNavigate,
  sticky = true,
  ctaLabel = 'Start free',
  signInLabel = 'Sign in',
  onCta,
  onSignIn,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const compact = useMatch('(max-width: 860px)');
  const go = href => e => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
    setOpen(false);
  };
  React.useEffect(() => {
    if (!compact) setOpen(false);
  }, [compact]);
  const brand = React.createElement('a', {
    key: 'w',
    href: '#',
    onClick: go('/'),
    style: {
      display: 'flex',
      textDecoration: 'none'
    }
  }, React.createElement(__ds_scope.Wordmark, {
    size: 20
  }));
  const row = compact ? React.createElement('div', {
    key: 'r',
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-md) var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-lg)'
    }
  }, [brand, React.createElement('button', {
    key: 'b',
    type: 'button',
    'aria-label': open ? 'Bezárás' : 'Menü',
    'aria-expanded': open,
    onClick: () => setOpen(!open),
    style: {
      width: 44,
      height: 44,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-sm)',
      color: 'var(--text-hi)',
      cursor: 'pointer',
      padding: 0,
      flex: '0 0 auto'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: open ? 'x' : 'menu',
    size: 22
  }))]) : React.createElement('div', {
    key: 'r',
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-lg) var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-xxl)'
    }
  }, [brand, React.createElement('nav', {
    key: 'n',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-huge)',
      marginLeft: 'auto',
      flexWrap: 'wrap'
    }
  }, links.map(l => React.createElement(NavLink, {
    key: l.href,
    link: l,
    active: l.href === activeHref,
    onClick: go(l.href)
  }))), React.createElement('div', {
    key: 'a',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-md)',
      marginLeft: 'auto'
    }
  }, [signInLabel && React.createElement(__ds_scope.Button, {
    key: 's',
    variant: 'ghost',
    size: 'cap',
    onClick: onSignIn
  }, signInLabel), ctaLabel && React.createElement(__ds_scope.Button, {
    key: 'c',
    variant: 'primary',
    size: 'cap',
    onClick: onCta,
    iconRight: React.createElement(__ds_scope.Icon, {
      name: 'arrow-right',
      size: 15
    })
  }, ctaLabel)])]);
  const drawer = compact && open && React.createElement('div', {
    key: 'd',
    style: {
      borderTop: '1px solid var(--line-hairline)',
      background: 'var(--surface-raised)',
      padding: 'var(--space-lg) var(--container-pad) var(--space-xl)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xs)'
    }
  }, [...links.map(l => React.createElement('a', {
    key: l.href,
    href: l.href,
    onClick: go(l.href),
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 48,
      padding: '0 var(--space-sm)',
      textDecoration: 'none',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--body-lg-size)',
      fontWeight: l.href === activeHref ? 'var(--weight-bold)' : 'var(--weight-medium)',
      color: l.href === activeHref ? 'var(--text-hi)' : 'var(--text-mute)',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, l.label)), React.createElement('div', {
    key: 'a',
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      marginTop: 'var(--space-md)'
    }
  }, [signInLabel && React.createElement(__ds_scope.Button, {
    key: 's',
    variant: 'ghost',
    size: 'md',
    fullWidth: true,
    onClick: () => {
      setOpen(false);
      if (onSignIn) onSignIn();
    }
  }, signInLabel), ctaLabel && React.createElement(__ds_scope.Button, {
    key: 'c',
    variant: 'primary',
    size: 'md',
    fullWidth: true,
    onClick: () => {
      setOpen(false);
      if (onCta) onCta();
    },
    iconRight: React.createElement(__ds_scope.Icon, {
      name: 'arrow-right',
      size: 16
    })
  }, ctaLabel)])]);
  return React.createElement('header', {
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 40,
      background: 'var(--surface-nav)',
      backdropFilter: 'var(--blur-nav)',
      borderBottom: '1px solid var(--line-hairline)',
      ...style
    }
  }, [row, drawer]);
}
function NavLink({
  link,
  active,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('a', {
    href: link.href,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      textDecoration: 'none',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--body-md-size)',
      fontWeight: active ? 'var(--weight-bold)' : 'var(--weight-medium)',
      color: active ? 'var(--text-hi)' : hover ? 'var(--text-hi)' : 'var(--text-mute)',
      paddingBottom: 3,
      boxShadow: active ? 'inset 0 -2px 0 0 var(--pink-500)' : hover ? 'inset 0 -2px 0 0 var(--line-neon)' : 'none',
      transition: 'color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, link.label);
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
const VARIANTS = {
  surface: {
    background: 'var(--surface-card)',
    boxShadow: 'inset 0 0 0 1px var(--line-hairline), var(--elev-1)',
    color: 'var(--text-body)',
    backdropFilter: 'var(--blur-glass)'
  },
  accent: {
    background: 'var(--surface-accent)',
    boxShadow: 'inset 0 0 0 1px var(--line-accent)',
    color: 'var(--text-body)'
  },
  gradient: {
    background: 'var(--surface-featured)',
    boxShadow: 'var(--elev-2)',
    color: 'var(--text-on-accent)'
  },
  band: {
    background: 'var(--surface-featured)',
    boxShadow: 'var(--glow-pink-lg)',
    color: 'var(--text-on-accent)'
  },
  outline: {
    background: 'transparent',
    boxShadow: 'inset 0 0 0 1px var(--line-strong)',
    color: 'var(--text-body)'
  }
};
function Card({
  children,
  variant = 'surface',
  padding,
  radius,
  interactive = false,
  glow = 'none',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.surface;
  const glowShadow = {
    pink: 'var(--glow-pink-md)',
    cyan: 'var(--glow-cyan-md)',
    violet: 'var(--glow-violet-md)',
    none: null
  }[glow];
  return React.createElement('div', {
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      position: 'relative',
      borderRadius: radius || (variant === 'band' ? 'var(--radius-xl)' : 'var(--radius-xl)'),
      padding: padding || (variant === 'band' ? 'var(--card-pad-band)' : 'var(--card-pad)'),
      transition: 'transform var(--dur-med) var(--ease-out), box-shadow var(--dur-med) var(--ease-out)',
      cursor: interactive ? 'pointer' : undefined,
      ...v,
      boxShadow: hover ? (glowShadow || 'var(--glow-violet-md)') + ', var(--elev-2)' : glowShadow ? glowShadow + ', ' + v.boxShadow : v.boxShadow,
      transform: hover ? 'translateY(-3px)' : 'translateY(0)',
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/PricingCard.jsx
try { (() => {
function PricingCard({
  tier,
  price,
  period = '/mo',
  blurb,
  features = [],
  cta = 'Start free',
  ctaHref,
  onCta,
  featured = false,
  badge,
  style
}) {
  const onAccent = featured;
  return React.createElement(__ds_scope.Card, {
    variant: featured ? 'gradient' : 'surface',
    glow: featured ? 'pink' : 'none',
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xl)',
      ...style
    }
  }, [React.createElement('div', {
    key: 'h',
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)'
    }
  }, [React.createElement('div', {
    key: 'r',
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-sm)'
    }
  }, [React.createElement('span', {
    key: 't',
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--heading-lg-size)',
      fontWeight: 'var(--heading-lg-weight)',
      letterSpacing: 'var(--heading-lg-ls)',
      color: onAccent ? 'var(--text-on-accent)' : 'var(--text-hi)'
    }
  }, tier), badge && React.createElement(__ds_scope.Eyebrow, {
    key: 'b',
    tone: onAccent ? 'onAccent' : 'violet'
  }, badge)]), React.createElement('div', {
    key: 'p',
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, [React.createElement('span', {
    key: 'v',
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--display-md-size)',
      fontWeight: 700,
      letterSpacing: 'var(--display-md-ls)',
      color: onAccent ? 'var(--text-on-accent)' : 'var(--text-hi)'
    }
  }, price), period && React.createElement('span', {
    key: 'r2',
    style: {
      fontSize: 'var(--caption-size)',
      color: onAccent ? 'rgba(255,255,255,.72)' : 'var(--text-faint)'
    }
  }, period)]), blurb && React.createElement('p', {
    key: 'b2',
    style: {
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-lh)',
      color: onAccent ? 'rgba(255,255,255,.82)' : 'var(--text-mute)'
    }
  }, blurb)]), React.createElement('ul', {
    key: 'f',
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)',
      flex: 1
    }
  }, features.map((ft, i) => React.createElement('li', {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-md)',
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-lh)',
      color: onAccent ? 'rgba(255,255,255,.9)' : 'var(--text-body)'
    }
  }, [React.createElement(__ds_scope.Icon, {
    key: 'i',
    name: 'check',
    size: 16,
    color: onAccent ? 'rgba(255,255,255,.9)' : 'var(--tone-cyan-fg)',
    style: {
      marginTop: 5
    }
  }), React.createElement('span', {
    key: 's'
  }, ft)]))), React.createElement(__ds_scope.Button, {
    key: 'c',
    variant: featured ? 'onAccent' : 'primary',
    fullWidth: true,
    href: ctaHref,
    onClick: onCta
  }, cta)]);
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatCard.jsx
try { (() => {
function StatCard({
  value,
  label,
  caption,
  tone = 'pink',
  align = 'left',
  style,
  ...rest
}) {
  const grad = {
    pink: 'var(--grad-neon-text)',
    cyan: 'var(--grad-stat-cyan)',
    violet: 'var(--grad-stat-violet)'
  }[tone];
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'left',
      padding: 'var(--card-pad)',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--surface-card)',
      backdropFilter: 'var(--blur-glass)',
      boxShadow: 'inset 0 0 0 1px var(--line-hairline)',
      ...style
    },
    ...rest
  }, [React.createElement('span', {
    key: 'v',
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--display-lg-size)',
      fontWeight: 'var(--display-lg-weight)',
      lineHeight: 'var(--display-lg-lh)',
      letterSpacing: 'var(--display-lg-ls)',
      background: grad,
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, value), label && React.createElement('span', {
    key: 'l',
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--body-strong-size)',
      letterSpacing: 'var(--body-strong-ls)',
      color: 'var(--text-hi)'
    }
  }, label), caption && React.createElement('span', {
    key: 'c',
    style: {
      fontSize: 'var(--caption-size)',
      lineHeight: 'var(--caption-lh)',
      color: 'var(--text-faint)'
    }
  }, caption)]);
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Eyebrow,
  Icon,
  TextInput,
  TextArea,
  Select,
  MeshBackdrop,
  TextLink
} = window.PrymaDesignSystem_286b6c;
function ContactScreen() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    topic: '',
    brief: ''
  });
  const [sent, setSent] = React.useState(false);
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  const emailError = form.email && !form.email.includes('@') ? 'Adj meg egy teljes e-mail címet.' : undefined;
  return /*#__PURE__*/React.createElement(MeshBackdrop, {
    intensity: "soft",
    grid: true,
    contentStyle: {
      padding: 'clamp(40px,7vw,80px) 0 clamp(48px,8vw,96px)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "r-form-aside"
  }, /*#__PURE__*/React.createElement(Appear, {
    immediate: true
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "surface",
    padding: "var(--card-pad-band)"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 36,
    color: "var(--signal-success)"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--display-md-size)',
      fontWeight: 700,
      letterSpacing: 'var(--display-md-ls)',
      color: 'var(--text-hi)'
    }
  }, "K\xF6sz\xF6n\xF6m", form.name ? ', ' + form.name : '', "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-lh)',
      color: 'var(--text-mute)'
    }
  }, "3 munkanapon bel\xFCl v\xE1laszolok. Ha s\xFCrg\u0151s, \xEDrj r\xE1 egy e-mailt, \xE9s el\u0151re veszem."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      setSent(false);
      setForm({
        name: '',
        email: '',
        topic: '',
        brief: ''
      });
    }
  }, "\xDAj \xFCzenet")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "pink"
  }, "Kapcsolat"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--display-md-size)',
      fontWeight: 700,
      letterSpacing: 'var(--display-md-ls)',
      lineHeight: 'var(--display-md-lh)',
      color: 'var(--text-hi)'
    }
  }, "\xCDrd meg, mire lenne sz\xFCks\xE9ged.")), /*#__PURE__*/React.createElement("div", {
    className: "r-field-pair"
  }, /*#__PURE__*/React.createElement(TextInput, {
    label: "N\xE9v",
    required: true,
    value: form.name,
    onChange: set('name'),
    placeholder: "Kov\xE1cs Anna"
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "E-mail",
    type: "email",
    required: true,
    value: form.email,
    onChange: set('email'),
    error: emailError,
    placeholder: "anna@vallalkozasom.hu",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 16
    })
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Miben seg\xEDthetek?",
    value: form.topic,
    onChange: set('topic'),
    placeholder: "V\xE1lassz egyet",
    options: ['Weboldal', 'Arculat', 'Weboldal és arculat', 'Marketing alapok', 'Még nem tudom']
  }), /*#__PURE__*/React.createElement(TextArea, {
    label: "Mivel foglalkozol?",
    rows: 5,
    value: form.brief,
    onChange: set('brief'),
    placeholder: "P\xE1r sor el\xE9g \u2014 \xE9s ha van m\xE1r oldalad, a linkje.",
    hint: "3 munkanapon bel\xFCl v\xE1laszolok."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-lg)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "\xDCzenet k\xFCld\xE9se"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--caption-size)',
      color: 'var(--text-faint)'
    }
  }, "Vagy \xEDrj ide: ", /*#__PURE__*/React.createElement(TextLink, {
    href: "mailto:hello@pryma.solutions"
  }, "hello@pryma.solutions")))))), /*#__PURE__*/React.createElement(AppearGroup, {
    immediate: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "accent",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 22,
    color: "var(--violet-400)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--heading-sm-size)',
      fontWeight: 600,
      color: 'var(--text-hi)'
    }
  }, "Mi t\xF6rt\xE9nik ezut\xE1n"), /*#__PURE__*/React.createElement(CheckList, {
    tone: "pink",
    items: ['Visszaírok, mit érdemes először megcsinálni', 'Egy rövid terv és egy fix ár', 'Ha kell, egy fél órás beszélgetés']
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "outline",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--heading-sm-size)',
      fontWeight: 600,
      color: 'var(--text-hi)'
    }
  }, "El\xE9rhet\u0151s\xE9g"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-lh)',
      color: 'var(--text-mute)'
    }
  }, "Budapest, t\xE1vmunk\xE1ban", /*#__PURE__*/React.createElement("br", null), "H\xE9tf\u0151\u2013p\xE9ntek, 9:00\u201318:00"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-sm-size)',
      color: 'var(--cyan-300)'
    }
  }, "hello@pryma.solutions"))))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DemoScreen.jsx
try { (() => {
/* Demó — kiállítás. Bal oldali szakmalista + eszközkeret, a teljes aloldal átveszi a téma színeit. */

const {
  Button,
  Card,
  Eyebrow,
  Icon,
  MeshBackdrop
} = window.PrymaDesignSystem_286b6c;

/* A színpad magassága a látómezőhöz igazodik, hogy mobilon is elférjen. */
function useStageH() {
  const get = () => typeof window === 'undefined' ? 640 : Math.max(360, Math.min(640, Math.round(window.innerHeight * 0.74)));
  const [h, setH] = React.useState(get);
  React.useEffect(() => {
    const on = () => setH(get());
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return h;
}
const DEMO_PAGES = {
  szalon: () => window.SalonPage,
  edzo: () => window.TrainerPage,
  asztalos: () => window.WorkshopPage
};
function skinCss(t) {
  const a = t.accent,
    ink = t.ink,
    mute = t.inkMute;
  return ':root{color-scheme:' + (t.dark ? 'dark' : 'light') + ';' + '--surface-void:' + t.bg2 + ' !important;--surface-page:' + t.bg + ' !important;--surface-raised:' + t.bg2 + ' !important;' + '--surface-card:' + t.card + ' !important;--surface-card-solid:' + t.card + ' !important;--surface-inset:' + tint(ink, 5) + ' !important;' + '--surface-accent:' + tint(a, 10) + ' !important;--surface-glass:' + tint(ink, 4) + ' !important;' + '--surface-nav:' + mix(t.bg, 'transparent', 88) + ' !important;--surface-chrome:' + tint(ink, 5) + ' !important;' + '--surface-featured:' + a + ' !important;' + '--text-hi:' + ink + ' !important;--text-body:' + ink + ' !important;--text-mute:' + mute + ' !important;--text-faint:' + mute + ' !important;' + '--text-on-accent:' + t.onAccent + ' !important;--text-link:' + a + ' !important;--text-link-hover:' + mix(a, ink, 78) + ' !important;--text-neon:' + a + ' !important;' + '--action-primary:' + a + ' !important;--action-primary-hover:' + mix(a, ink, 88) + ' !important;--action-primary-press:' + mix(a, ink, 76) + ' !important;' + '--action-secondary:' + tint(a, 12) + ' !important;--action-secondary-hover:' + tint(a, 20) + ' !important;' + '--action-outline:' + a + ' !important;--action-outline-hover:' + mix(a, ink, 80) + ' !important;' + '--focus-ring:' + a + ' !important;--focus-halo:' + tint(a, 18) + ' !important;' + '--line-hairline:' + t.lineSoft + ' !important;--line-strong:' + t.line + ' !important;--line-neon:' + tint(a, 45) + ' !important;--line-cyan:' + tint(a, 35) + ' !important;--line-accent:' + tint(a, 30) + ' !important;' + '--pink-500:' + a + ' !important;--pink-400:' + a + ' !important;--cyan-400:' + a + ' !important;--violet-400:' + a + ' !important;--cyan-300:' + a + ' !important;' + '--tone-violet-fg:' + a + ' !important;--tone-violet-chip:' + tint(a, 10) + ' !important;--tone-violet-line:' + tint(a, 28) + ' !important;' + '--tone-pink-fg:' + a + ' !important;--tone-pink-chip:' + tint(a, 10) + ' !important;--tone-pink-line:' + tint(a, 28) + ' !important;' + '--tone-cyan-fg:' + a + ' !important;--tone-cyan-chip:' + tint(a, 10) + ' !important;--tone-cyan-line:' + tint(a, 28) + ' !important;' + '--glow-pink-sm:none !important;--glow-pink-md:none !important;--glow-pink-lg:none !important;--glow-cyan-sm:none !important;--glow-cyan-md:none !important;--glow-violet-md:none !important;--glow-text-pink:none !important;--glow-text-cyan:none !important;' + '--elev-inset-neon:inset 0 0 0 1px ' + tint(a, 34) + ' !important;' + '--grad-mesh-pink:radial-gradient(60% 70% at 18% 12%,' + tint(a, 14) + ' 0%,transparent 68%) !important;' + '--grad-mesh-violet:radial-gradient(58% 62% at 82% 26%,' + tint(a, 10) + ' 0%,transparent 70%) !important;' + '--grad-mesh-cyan:radial-gradient(52% 55% at 50% 96%,' + tint(a, 8) + ' 0%,transparent 72%) !important;' + '--grad-hero:linear-gradient(180deg,' + t.bg + ' 0%,' + t.bg2 + ' 100%) !important;' + '--grad-fade-page:linear-gradient(180deg,transparent 0%,' + t.bg + ' 82%) !important;' + '--grad-brand:linear-gradient(96deg,' + a + ' 0%,' + mix(a, ink, 70) + ' 100%) !important;' + '--grad-neon-text:linear-gradient(92deg,' + a + ' 0%,' + mix(a, ink, 70) + ' 100%) !important;' + '--grid-line:' + tint(a, 12) + ' !important;--scanline:' + tint(ink, 3) + ' !important;' + '--scrollbar-track:' + t.bg2 + ' !important;--scrollbar-thumb:' + tint(ink, 22) + ' !important;--scrollbar-thumb-hover:' + tint(ink, 34) + ' !important;' + '--selection-bg:' + tint(a, 28) + ' !important;--selection-fg:' + ink + ' !important;}';
}

/* Kilépéskor a demó háttere még egy pillanatra megmarad, és onnan úszik át a Pryma arculatba. */
function fadeBackToPryma(from) {
  if (!from || typeof document === 'undefined') return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const old = document.getElementById('pryma-demo-exit');
  if (old) old.remove();
  const o = document.createElement('div');
  o.id = 'pryma-demo-exit';
  o.style.cssText = 'position:fixed;inset:0;z-index:60;pointer-events:none;background:' + from + ';opacity:1';
  document.body.appendChild(o);
  const D = 620;
  let raf = null,
    timer = null,
    safety = null,
    cutting = false;
  const kill = () => {
    if (raf) cancelAnimationFrame(raf);
    clearTimeout(timer);
    clearTimeout(safety);
    o.remove();
  };
  /* Saját óra: a leváló komponens commitjában a CSS-animáció állva maradhat. */
  const t0 = performance.now();
  const tick = ts => {
    if (cutting) return;
    const p = Math.min(1, (ts - t0) / D);
    o.style.opacity = String(1 - (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2));
    if (p < 1) raf = requestAnimationFrame(tick);else kill();
  };
  raf = requestAnimationFrame(tick);
  /* Ha nincs képkocka (háttérben levő fül, fojtott iframe), időzítő zárja le — soha nem marad fenn takaró réteg. */
  timer = setTimeout(() => {
    if (!o.isConnected || cutting) return;
    if (parseFloat(getComputedStyle(o).opacity) < 0.02) return kill();
    if (document.hidden) return kill();
    cutting = true;
    if (raf) cancelAnimationFrame(raf);
    o.style.transition = 'opacity .34s linear';
    o.style.opacity = '0';
    o.addEventListener('transitionend', kill, {
      once: true
    });
    safety = setTimeout(kill, 600);
  }, D + 400);
  o.__cut = kill;
  return o;
}
function useDemoSkin(t) {
  const last = React.useRef(null);
  React.useEffect(() => {
    if (!t) return;
    last.current = t.bg;
    let el = document.getElementById('pryma-demo-skin');
    if (!el) {
      el = document.createElement('style');
      el.id = 'pryma-demo-skin';
      document.head.appendChild(el);
    }
    el.textContent = skinCss(t);
    return () => {
      /* A takaró réteg még a skin levétele előtt kerül fel, hogy ne legyen egyetlen csupasz képkocka sem. */
      const o = fadeBackToPryma(last.current);
      const n = document.getElementById('pryma-demo-skin');
      if (n) n.remove();
      /* Ha csak témát vagy színt váltunk, a következő skin azonnal felkerül — akkor nincs átúszás. */
      if (o) {
        const suppress = () => {
          if (document.getElementById('pryma-demo-skin')) o.__cut();
        };
        requestAnimationFrame(suppress);
        setTimeout(suppress, 0);
      }
    };
  }, [t && t.id, t && t.accent]);
}

/* Indul magától, az első kézi mozdulatra átadja a vezetést. */
function useAutoScroll(ref, key) {
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.scrollTop = 0;
    let raf = null,
      stopped = false,
      start = null;
    const stop = () => {
      stopped = true;
      if (raf) cancelAnimationFrame(raf);
    };
    const step = ts => {
      if (stopped) return;
      if (start === null) start = ts;
      const max = el.scrollHeight - el.clientHeight;
      if (max > 0) el.scrollTop = max * Math.min(1, (ts - start) / 30000);
      if (ts - start < 30000) raf = requestAnimationFrame(step);
    };
    const timer = setTimeout(() => {
      raf = requestAnimationFrame(step);
    }, 1400);
    const evts = ['wheel', 'touchstart', 'pointerdown', 'keydown'];
    evts.forEach(e => el.addEventListener(e, stop, {
      passive: true
    }));
    return () => {
      clearTimeout(timer);
      stop();
      evts.forEach(e => el.removeEventListener(e, stop));
    };
  }, [key]);
}
function MiniPreview({
  theme,
  style
}) {
  const t = resolveDemo(theme, 0);
  const bar = (w, c, h) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: w,
      height: h || 5,
      background: c,
      borderRadius: 1
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.bg,
      border: '1px solid ' + t.line,
      borderRadius: 3,
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 9,
      aspectRatio: '16 / 10',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, bar(26, t.ink, 4), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 4
    }
  }, bar(12, t.lineSoft, 4), bar(12, t.lineSoft, 4), bar(16, t.accent, 4))), theme.id === 'szalon' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      flex: 1,
      justifyContent: 'center'
    }
  }, bar('70%', t.ink, 9), bar('52%', t.ink, 9), bar('84%', t.lineSoft, 4), bar(36, t.accent, 10)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 34%',
      background: 'repeating-linear-gradient(135deg,' + t.stripeA + ' 0 4px,' + t.stripeB + ' 4px 8px)',
      border: '1px solid ' + t.lineSoft
    }
  })), theme.id === 'edzo' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      flex: 1,
      justifyContent: 'center'
    }
  }, bar('88%', t.ink, 12), bar('60%', t.ink, 12), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5,
      marginTop: 3
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      height: 20,
      background: i === 1 ? t.accent : t.card,
      border: '1px solid ' + t.lineSoft,
      borderRadius: 2
    }
  })))), theme.id === 'asztalos' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      flex: 1,
      justifyContent: 'center'
    }
  }, bar('66%', t.ink, 8), bar('40%', t.lineSoft, 4), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      marginTop: 4
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      height: 1,
      background: t.line
    }
  }))), bar(30, t.accent, 5)));
}
function DeviceFrame({
  dev,
  w,
  stageH,
  children,
  scrollKey,
  t
}) {
  const STAGE_H = stageH || 640;
  const D = DEMO_DEVICES.find(d => d.key === dev);
  const bezel = dev === 'mobile' ? 11 : dev === 'tablet' ? 13 : 6;
  const chrome = dev === 'desktop' ? 30 : 0;
  const avail = Math.max(280, w);
  const scale = Math.min((avail - bezel * 2) / D.w, (STAGE_H - bezel * 2 - chrome) / D.h, 1);
  const innerRef = React.useRef(null);
  useAutoScroll(innerRef, scrollKey + dev);
  const [up, setUp] = React.useState(false);
  React.useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const on = () => setUp(el.scrollTop > 240);
    on();
    el.addEventListener('scroll', on, {
      passive: true
    });
    return () => el.removeEventListener('scroll', on);
  }, [scrollKey, dev]);
  const toTop = () => {
    const el = innerRef.current;
    if (!el) return;
    el.dispatchEvent(new Event('pointerdown'));
    el.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const shellW = Math.round(D.w * scale) + bezel * 2;
  const shellH = Math.round(D.h * scale) + bezel * 2 + chrome;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: shellW,
      height: shellH,
      background: dev === 'desktop' ? '#1b1a20' : '#15141a',
      borderRadius: dev === 'mobile' ? 34 : dev === 'tablet' ? 22 : 10,
      padding: bezel,
      boxShadow: '0 24px 60px rgba(0,0,0,.34), 0 0 0 1px rgba(255,255,255,.07)',
      boxSizing: 'border-box',
      overflow: 'hidden',
      transition: 'width .28s cubic-bezier(.2,.8,.2,1), height .28s cubic-bezier(.2,.8,.2,1)'
    }
  }, chrome > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: chrome,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '0 6px'
    }
  }, ['#ff5f57', '#febc2e', '#28c840'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 9,
      height: 9,
      borderRadius: 99,
      background: c
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 10,
      flex: 1,
      maxWidth: 240,
      height: 15,
      borderRadius: 4,
      background: 'rgba(255,255,255,.1)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: Math.round(D.w * scale),
      height: Math.round(D.h * scale),
      borderRadius: dev === 'mobile' ? 24 : dev === 'tablet' ? 12 : 4,
      overflow: 'hidden',
      background: '#000',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: innerRef,
    className: "demoframe",
    style: {
      width: D.w,
      height: D.h,
      transform: 'scale(' + scale + ')',
      transformOrigin: 'top left',
      overflowY: 'auto',
      overflowX: 'hidden',
      WebkitOverflowScrolling: 'touch'
    }
  }, children), /*#__PURE__*/React.createElement("button", {
    onClick: toTop,
    "aria-label": "Vissza a lap tetej\xE9re",
    title: "Vissza a lap tetej\xE9re",
    style: {
      position: 'absolute',
      right: dev === 'mobile' ? 12 : 18,
      bottom: dev === 'mobile' ? 12 : 18,
      width: dev === 'mobile' ? 34 : 40,
      height: dev === 'mobile' ? 34 : 40,
      borderRadius: 99,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      background: t ? t.accent : 'var(--action-primary)',
      color: t ? t.onAccent : 'var(--text-on-accent)',
      border: 'none',
      boxShadow: '0 6px 18px rgba(0,0,0,.28)',
      opacity: up ? 1 : 0,
      pointerEvents: up ? 'auto' : 'none',
      transform: up ? 'none' : 'translateY(10px)',
      transition: 'opacity .28s cubic-bezier(.2,.8,.2,1), transform .28s cubic-bezier(.2,.8,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      animation: up ? 'demoHop 1.6s cubic-bezier(.3,.7,.3,1) infinite' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up",
    size: dev === 'mobile' ? 15 : 17,
    color: "currentColor"
  }))), /*#__PURE__*/React.createElement("style", null, '@keyframes demoHop{0%,58%,100%{transform:translateY(0)}72%{transform:translateY(-4px)}86%{transform:translateY(-1px)}}'))));
}
function DemoScreen({
  onNavigate
}) {
  const [pick, setPick] = React.useState(null);
  const [mood, setMood] = React.useState({});
  const [lay, setLay] = React.useState({});
  const [motion, setMotion] = React.useState(true);
  const [gfx, setGfx] = React.useState('ikon');
  const [dev, setDev] = React.useState(() => typeof window !== 'undefined' && window.innerWidth < 760 ? 'mobile' : 'desktop');
  const stageH = useStageH();
  const theme = pick ? DEMO_THEMES.find(x => x.id === pick) : null;
  const t = theme ? resolveDemo(theme, mood[pick] || 0) : null;
  const layIdx = pick ? lay[pick] || 0 : 0;
  useDemoSkin(t);
  const stageRef = React.useRef(null);
  const [stageW, setStageW] = React.useState(880);
  React.useEffect(() => {
    const el = stageRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(([e]) => setStageW(e.contentRect.width));
    ro.observe(el);
    setStageW(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, [pick]);
  if (!theme) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MeshBackdrop, {
      intensity: "soft",
      grid: false,
      contentStyle: {
        padding: 'clamp(40px,7vw,80px) 0 clamp(32px,5vw,56px)'
      }
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(AppearGroup, {
      immediate: true,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-xl)',
        maxWidth: 720
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "pink"
    }, "Dem\xF3"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'var(--display-xl-size)',
        fontWeight: 'var(--display-xl-weight)',
        lineHeight: 'var(--display-xl-lh)',
        letterSpacing: 'var(--display-xl-ls)',
        color: 'var(--text-hi)',
        textWrap: 'pretty'
      }
    }, "N\xE9zd meg, mit tudna a te oldalad."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--body-lg-size)',
        lineHeight: 'var(--body-lg-lh)',
        letterSpacing: 'var(--body-lg-ls)',
        color: 'var(--text-mute)'
      }
    }, "H\xE1rom szakma, h\xE1rom sz\xE1nd\xE9kosan k\xFCl\xF6nb\xF6z\u0151 st\xEDlus. V\xE1lassz egyet, \xE9s megny\xEDlik egy teljes p\xE9ldaoldal: sz\xEDnt, elrendez\xE9st \xE9s grafik\xE1t is v\xE1ltogathatsz benne, mobilon, tableten \xE9s nagy k\xE9perny\u0151n is.")))), /*#__PURE__*/React.createElement(Section, {
      tight: true
    }, /*#__PURE__*/React.createElement(AppearGroup, {
      className: "r-g3",
      style: {
        alignItems: 'stretch'
      }
    }, DEMO_THEMES.map((th, i) => /*#__PURE__*/React.createElement(Card, {
      key: th.id,
      variant: "surface",
      interactive: true,
      glow: "none",
      onClick: () => setPick(th.id),
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-lg)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(MiniPreview, {
      theme: th
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--mono-sm-size)',
        letterSpacing: '.1em',
        color: 'var(--text-faint)'
      }
    }, '0' + (i + 1)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--heading-md-size)',
        fontWeight: 'var(--heading-md-weight)',
        color: 'var(--text-hi)'
      }
    }, th.rail), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--body-md-size)',
        lineHeight: 'var(--body-md-lh)',
        color: 'var(--text-mute)',
        marginBottom: 'auto'
      }
    }, th.note), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--mono-sm-size)',
        letterSpacing: '.06em',
        color: 'var(--text-faint)'
      }
    }, th.layouts.length, " elrendez\xE9s \xB7 ", th.moods.length, " sz\xEDnvil\xE1g \xB7 ", DEMO_GFX.length, " grafika"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginTop: 'var(--space-md)'
      }
    }, th.moods.map(m => /*#__PURE__*/React.createElement("span", {
      key: m.dot,
      style: {
        width: 12,
        height: 12,
        borderRadius: 99,
        background: m.dot,
        boxShadow: '0 0 0 1px var(--line-hairline)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontSize: 'var(--body-md-size)',
        color: 'var(--action-primary)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, "Megnyitom ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    }))))))), /*#__PURE__*/React.createElement(Section, {
      tight: true
    }, /*#__PURE__*/React.createElement(Appear, {
      from: "scale"
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "outline",
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-32)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--body-md-size)',
        lineHeight: 'var(--body-md-lh)',
        color: 'var(--text-mute)',
        maxWidth: 560
      }
    }, "A p\xE9ldaoldalakon sz\xE1nd\xE9kosan nincs kital\xE1lt c\xE9gn\xE9v, a fot\xF3k hely\xE9t pedig jel\xF6ltem. A tieden a saj\xE1t k\xE9peid \xE9s sz\xF6vegeid lesznek."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onNavigate('/kapcsolat')
    }, "Besz\xE9lj\xFCk \xE1t")))));
  }
  const Page = DEMO_PAGES[pick]();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      padding: 'clamp(24px,4vw,40px) var(--container-pad) clamp(48px,7vw,72px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1640,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-demo"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "r-demo-rail"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPick(null),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginBottom: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 14
  }), " Mind a h\xE1rom"), DEMO_THEMES.map((th, i) => {
    const on = th.id === pick;
    return /*#__PURE__*/React.createElement("button", {
      key: th.id,
      onClick: () => setPick(th.id),
      style: {
        textAlign: 'left',
        cursor: 'pointer',
        background: on ? 'var(--surface-card-solid)' : 'transparent',
        border: '1px solid ' + (on ? 'var(--line-strong)' : 'transparent'),
        borderLeft: '2px solid ' + (on ? 'var(--action-primary)' : 'var(--line-hairline)'),
        borderRadius: 'var(--radius-sm)',
        padding: '14px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        letterSpacing: '.14em',
        color: on ? 'var(--action-primary)' : 'var(--text-faint)'
      }
    }, '0' + (i + 1)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 15,
        fontWeight: on ? 600 : 500,
        color: on ? 'var(--text-hi)' : 'var(--text-mute)'
      }
    }, th.rail), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        lineHeight: 1.5,
        color: 'var(--text-faint)'
      }
    }, th.note));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-demo-tools"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, theme.moods.map((m, i) => {
    const on = (mood[pick] || 0) === i;
    return /*#__PURE__*/React.createElement("button", {
      key: m.dot,
      onClick: () => setMood({
        ...mood,
        [pick]: i
      }),
      "aria-label": 'Szín ' + (i + 1),
      style: {
        width: 22,
        height: 22,
        borderRadius: 99,
        background: m.dot,
        cursor: 'pointer',
        border: '2px solid ' + (on ? 'var(--text-hi)' : 'transparent'),
        outline: '1px solid var(--line-hairline)',
        outlineOffset: on ? 1 : 0,
        padding: 0
      }
    });
  })), /*#__PURE__*/React.createElement("span", {
    className: "r-sep",
    style: {
      width: 1,
      height: 22,
      background: 'var(--line-hairline)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      background: 'var(--surface-inset)',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-sm)',
      padding: 3
    }
  }, theme.layouts.map((L, i) => {
    const on = layIdx === i;
    return /*#__PURE__*/React.createElement("button", {
      key: L.id,
      onClick: () => setLay({
        ...lay,
        [pick]: i
      }),
      title: L.note,
      style: {
        cursor: 'pointer',
        border: 'none',
        borderRadius: 'calc(var(--radius-sm) - 2px)',
        padding: '7px 14px',
        fontFamily: 'var(--font-ui)',
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '.04em',
        background: on ? 'var(--surface-card-solid)' : 'transparent',
        boxShadow: on ? 'inset 0 0 0 1px var(--line-strong)' : 'none',
        color: on ? 'var(--text-hi)' : 'var(--text-mute)'
      }
    }, L.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      background: 'var(--surface-inset)',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-sm)',
      padding: 3
    }
  }, DEMO_GFX.map(g => {
    const on = gfx === g.key;
    return /*#__PURE__*/React.createElement("button", {
      key: g.key,
      onClick: () => setGfx(g.key),
      title: g.note,
      style: {
        cursor: 'pointer',
        border: 'none',
        borderRadius: 'calc(var(--radius-sm) - 2px)',
        padding: '7px 14px',
        fontFamily: 'var(--font-ui)',
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '.04em',
        background: on ? 'var(--surface-card-solid)' : 'transparent',
        boxShadow: on ? 'inset 0 0 0 1px var(--line-strong)' : 'none',
        color: on ? 'var(--text-hi)' : 'var(--text-mute)'
      }
    }, g.label);
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMotion(!motion),
    style: {
      cursor: 'pointer',
      background: 'transparent',
      border: '1px solid var(--line-hairline)',
      borderRadius: 99,
      padding: '6px 12px 6px 8px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: motion ? 'var(--text-hi)' : 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 14,
      borderRadius: 99,
      background: motion ? 'var(--action-primary)' : 'var(--line-strong)',
      position: 'relative',
      transition: 'background .2s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: motion ? 14 : 2,
      width: 10,
      height: 10,
      borderRadius: 99,
      background: motion ? 'var(--text-on-accent)' : 'var(--surface-page)',
      transition: 'left .2s cubic-bezier(.2,.8,.2,1)'
    }
  })), "Mozg\xE1s"), /*#__PURE__*/React.createElement("div", {
    className: "r-push",
    style: {
      display: 'flex',
      gap: 2,
      background: 'var(--surface-inset)',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-sm)',
      padding: 3
    }
  }, DEMO_DEVICES.map(d => {
    const on = d.key === dev;
    return /*#__PURE__*/React.createElement("button", {
      key: d.key,
      onClick: () => setDev(d.key),
      style: {
        cursor: 'pointer',
        border: 'none',
        borderRadius: 'calc(var(--radius-sm) - 2px)',
        padding: '7px 15px',
        fontFamily: 'var(--font-ui)',
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '.04em',
        background: on ? 'var(--action-primary)' : 'transparent',
        color: on ? 'var(--text-on-accent)' : 'var(--text-mute)'
      }
    }, d.label);
  }))), /*#__PURE__*/React.createElement("div", {
    ref: stageRef,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: 4,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(DeviceFrame, {
    dev: dev,
    w: stageW,
    stageH: stageH,
    scrollKey: pick + (mood[pick] || 0),
    t: t
  }, /*#__PURE__*/React.createElement(Page, {
    t: t,
    dev: dev,
    v: theme.layouts[layIdx].id,
    motion: motion,
    gfx: gfx
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-lg)',
      flexWrap: 'wrap',
      borderTop: '1px solid var(--line-hairline)',
      paddingTop: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, "Az oldal mag\xE1t\xF3l indul \u2014 g\xF6rgesd, ha \xE1tveszed. A k\xE1rty\xE1k, sorok \xE9s a gal\xE9ria kattinthat\xF3k."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNavigate('/kapcsolat'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "Ilyet szeretn\xE9k"))))));
}
Object.assign(window, {
  DemoScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DemoScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Eyebrow,
  Icon,
  MeshBackdrop,
  TextLink
} = window.PrymaDesignSystem_286b6c;
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MeshBackdrop, {
    intensity: "full",
    grid: true,
    contentStyle: {
      padding: 'clamp(56px,10vw,112px) 0 clamp(48px,8vw,96px)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(AppearGroup, {
    immediate: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 'var(--space-xxl)',
      maxWidth: 820,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "pink"
  }, "Egyszem\xE9lyes st\xFAdi\xF3"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--display-xxl-size)',
      fontWeight: 700,
      lineHeight: 'var(--display-xxl-lh)',
      letterSpacing: 'var(--display-xxl-ls)',
      color: 'var(--text-hi)',
      textWrap: 'pretty'
    }
  }, "Weboldal \xE9s arculat", /*#__PURE__*/React.createElement("br", null), "a v\xE1llalkoz\xE1sodnak."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-lg-size)',
      lineHeight: 'var(--body-lg-lh)',
      letterSpacing: 'var(--body-lg-ls)',
      color: 'var(--text-mute)',
      maxWidth: 600
    }
  }, "Fejleszt\u0151 \xE9s designer vagyok egy szem\xE9lyben. Seg\xEDtek fel\xE9p\xEDteni a v\xE1llalkoz\xE1sod online megjelen\xE9s\xE9t: az arculatt\xF3l a k\xE9sz, m\u0171k\xF6d\u0151 weboldalig."), /*#__PURE__*/React.createElement("div", {
    className: "r-cta-stack",
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    onClick: () => onNavigate('/kapcsolat'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "K\xE9rj aj\xE1nlatot"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: () => onNavigate('/szolgaltatasok')
  }, "Mit v\xE1llalok")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--caption-size)',
      color: 'var(--text-faint)'
    }
  }, "V\xE1lasz k\xE9t munkanapon bel\xFCl.")))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Amiben seg\xEDtek",
    title: "H\xE1rom ter\xFClet, egy ember.",
    lead: "Nem kell k\xFCl\xF6n designert, fejleszt\u0151t \xE9s marketingest keresned. Egy helyen \xE1tl\xE1that\xF3 marad, hol tart a munka."
  }), /*#__PURE__*/React.createElement(AppearGroup, {
    className: "r-g3",
    style: {
      marginTop: 'var(--space-48)'
    }
  }, /*#__PURE__*/React.createElement(FeatureTile, {
    icon: "palette",
    tone: "pink",
    title: "Arculat",
    body: "Log\xF3, sz\xEDnek, tipogr\xE1fia \xE9s egy r\xF6vid \xFAtmutat\xF3 arr\xF3l, hogyan haszn\xE1ld \u0151ket a mindennapokban."
  }), /*#__PURE__*/React.createElement(FeatureTile, {
    icon: "layers",
    tone: "violet",
    title: "Weboldal",
    body: "Tervez\xE9s \xE9s fejleszt\xE9s: bemutatkoz\xF3 oldal vagy t\xF6bb aloldalas weboldal, mobilon is rendben."
  }), /*#__PURE__*/React.createElement(FeatureTile, {
    icon: "target",
    tone: "cyan",
    title: "Marketing alapok",
    body: "Mit mondj magadr\xF3l, kinek, \xE9s hol. Egyszer\u0171, k\xF6vethet\u0151 terv a k\xF6vetkez\u0151 p\xE1r h\xF3napra."
  }))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Hogyan dolgozunk",
    title: "N\xE9gy l\xE9p\xE9s, nincs felesleges k\xF6r.",
    align: "center",
    tone: "cyan"
  }), /*#__PURE__*/React.createElement(AppearGroup, {
    className: "r-g4",
    style: {
      marginTop: 'var(--space-48)'
    }
  }, /*#__PURE__*/React.createElement(StepCard, {
    n: "01",
    title: "Besz\xE9lget\xE9s",
    body: "Elmondod, mivel foglalkozol \xE9s mire lenne sz\xFCks\xE9ged. Ebb\u0151l \xEDrok egy r\xF6vid tervet \xE9s egy fix \xE1rat."
  }), /*#__PURE__*/React.createElement(StepCard, {
    n: "02",
    title: "Terv",
    body: "Megmutatom, hogyan fog kin\xE9zni az oldal, miel\u0151tt b\xE1rmit meg\xE9p\xEDten\xE9k. Itt m\xE9g k\xF6nny\u0171 v\xE1ltoztatni."
  }), /*#__PURE__*/React.createElement(StepCard, {
    n: "03",
    title: "Megval\xF3s\xEDt\xE1s",
    body: "Meg\xE9p\xEDtem, \xE9les\xEDtem, \xE9s megmutatom, hogyan tudod magad friss\xEDteni a tartalmat."
  }), /*#__PURE__*/React.createElement(StepCard, {
    n: "04",
    title: "Ut\xE1nk\xF6vet\xE9s, optimaliz\xE1l\xE1s",
    body: "\xC9les\xEDt\xE9s ut\xE1n figyelem, hogyan m\u0171k\xF6dik az oldal, \xE9s finom\xEDtom azt, ami a val\xF3s haszn\xE1lat alapj\xE1n kider\xFCl."
  }))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-g2"
  }, /*#__PURE__*/React.createElement(Appear, {
    from: "left",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "violet"
  }, "Mi\xE9rt egy emberrel"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--display-md-size)',
      fontWeight: 700,
      letterSpacing: 'var(--display-md-ls)',
      lineHeight: 'var(--display-md-lh)',
      color: 'var(--text-hi)'
    }
  }, "Velem besz\xE9lsz, nem egy fi\xF3kkezel\u0151vel."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-lh)',
      color: 'var(--text-mute)'
    }
  }, "\xC9n tervezem \xE9s \xE9n is \xE9p\xEDtem meg az oldalt, \xEDgy nincs f\xE9lre\xE9rt\xE9s a terv \xE9s a k\xE9sz munka k\xF6z\xF6tt. Az indul\xF3 v\xE1llalkoz\xE1sokn\xE1l ez a legr\xF6videbb \xFAt egy haszn\xE1lhat\xF3 weboldalhoz."), /*#__PURE__*/React.createElement(CheckList, {
    items: ['Egy kapcsolattartó a teljes munka alatt', 'Fix ár, a munka megkezdése előtt egyeztetve', 'Az oldal a tiéd: a fájlok és a hozzáférések nálad maradnak']
  })), /*#__PURE__*/React.createElement(Appear, {
    from: "right",
    delay: 120
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "accent",
    padding: "var(--space-48)",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 24,
    color: "var(--cyan-300)"
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--heading-md-size)',
      fontWeight: 600,
      color: 'var(--text-hi)'
    }
  }, "Van egy \xF6tleted, de m\xE9g nem tudod, hol kezdj?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-lh)',
      color: 'var(--text-mute)'
    }
  }, "\xCDrj p\xE1r sort arr\xF3l, mivel foglalkozol. Vissza\xEDrom, mit \xE9rdemes el\u0151sz\xF6r megcsin\xE1lni, akkor is, ha v\xE9g\xFCl nem egy\xFCtt dolgozunk."), /*#__PURE__*/React.createElement(TextLink, {
    href: "mailto:hello@pryma.solutions"
  }, "hello@pryma.solutions"))))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(Appear, {
    from: "scale"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "band",
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 'var(--space-xl)',
      padding: 'clamp(40px,7vw,72px) var(--card-pad-band)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--display-md-size)',
      fontWeight: 700,
      letterSpacing: 'var(--display-md-ls)',
      color: 'var(--text-on-accent)'
    }
  }, "Kezdj\xFCk egy besz\xE9lget\xE9ssel."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-lg-size)',
      lineHeight: 'var(--body-lg-lh)',
      color: 'rgba(255,255,255,.84)',
      maxWidth: 540
    }
  }, "\xCDrd meg, mire lenne sz\xFCks\xE9ged. K\xE9t munkanapon bel\xFCl k\xFCld\xF6k egy tervet \xE9s egy \xE1rat."), /*#__PURE__*/React.createElement(Button, {
    variant: "onAccent",
    size: "lg",
    onClick: () => onNavigate('/kapcsolat')
  }, "Kapcsolatfelv\xE9tel")))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Intro.jsx
try { (() => {
/* Pryma intro — the core drops in, powers on frame by frame, wordmark locks, then the entry gate. */

const INTRO_CSS = `
@keyframes pi-grid{from{opacity:0}to{opacity:1}}
@keyframes pi-drop{0%{transform:translateY(-128%) scale(1.05);opacity:0}9%{opacity:1}66%{transform:translateY(3.2%) scale(1)}82%{transform:translateY(-1.4%)}92%{transform:translateY(.5%)}100%{transform:translateY(0)}}
@keyframes pi-jolt{0%,100%{transform:translate(0,0)}14%{transform:translate(-5px,3px)}30%{transform:translate(5px,-3px)}52%{transform:translate(-3px,2px)}74%{transform:translate(2px,-1px)}}
@keyframes pi-impact{0%{opacity:0;transform:scaleX(.3)}18%{opacity:1}100%{opacity:0;transform:scaleX(1.5)}}
@keyframes pi-frame{0%{opacity:0}100%{opacity:1}}
@keyframes pi-blink{0%{opacity:0}22%{opacity:1}38%{opacity:.1}54%{opacity:1}68%{opacity:.35}100%{opacity:1}}
@keyframes pi-aura{0%{opacity:0;transform:scale(.72)}100%{opacity:1;transform:scale(1)}}
@keyframes pi-flash{0%{opacity:0}30%{opacity:.75}100%{opacity:0}}
@keyframes pi-scan{0%{transform:translateY(-30px);opacity:0}12%{opacity:.9}88%{opacity:.9}100%{transform:translateY(660px);opacity:0}}
@keyframes pi-hud{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
@keyframes pi-bloom{0%{opacity:1;transform:scale(1)}42%{opacity:1;transform:scale(1.04)}100%{opacity:0;transform:scale(1.18)}}
@keyframes pi-lock{0%{opacity:0;transform:scale(.93);filter:blur(9px)}58%{opacity:1;filter:blur(0)}100%{opacity:1;transform:scale(1);filter:blur(0)}}
@keyframes pi-out{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(1.06)}}
@keyframes pi-lift{from{clip-path:inset(0 0 0 0)}to{clip-path:inset(0 0 100% 0)}}
@keyframes pi-in{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
@keyframes pi-flick{0%{opacity:0}5%{opacity:.85}9%{opacity:.06}15%{opacity:.7}20%{opacity:.04}27%{opacity:1}32%{opacity:.18}40%{opacity:.9}46%{opacity:.32}57%{opacity:1}63%{opacity:.55}71%{opacity:1}79%{opacity:.78}100%{opacity:1}}
`;
const {
  Wordmark,
  Card,
  Eyebrow
} = window.PrymaDesignSystem_286b6c;

/* Six-frame power-on sequence. Frame 1 is dark, each following frame lights one more system. */
const FRAMES = [{
  src: 'robot/f1.jpg',
  at: 0,
  dur: 0,
  kf: null
}, {
  src: 'robot/f2.jpg',
  at: 1180,
  dur: 300,
  kf: 'pi-blink'
}, {
  src: 'robot/f3.jpg',
  at: 1440,
  dur: 260,
  kf: 'pi-frame'
}, {
  src: 'robot/f4.jpg',
  at: 1690,
  dur: 240,
  kf: 'pi-frame'
}, {
  src: 'robot/f5.jpg',
  at: 1920,
  dur: 240,
  kf: 'pi-frame'
}, {
  src: 'robot/f6.jpg',
  at: 2150,
  dur: 300,
  kf: 'pi-frame'
}];
const FRAME_W = 362;
const FRAME_H = 641;
/* feather every edge so the artwork's starfield melts into the void — two nested masks */
const MASK_Y = 'linear-gradient(180deg,transparent 0%,#000 7%,#000 58%,rgba(0,0,0,.45) 84%,transparent 100%)';
const MASK_X = 'linear-gradient(90deg,transparent 0%,rgba(0,0,0,.5) 12%,#000 26%,#000 74%,rgba(0,0,0,.5) 88%,transparent 100%)';
const GATE = [{
  n: '01',
  title: 'Szolgáltatások',
  desc: 'Weboldal, arculat és marketing alapok kis vállalkozásoknak.',
  href: '/szolgaltatasok',
  ring: 'var(--glow-pink-md)',
  line: 'var(--line-neon)'
}, {
  n: '02',
  title: 'Demó',
  desc: 'Élő minták valódi kisvállalkozásokra szabva.',
  href: '/demo',
  ring: 'var(--glow-violet-md)',
  line: 'var(--line-accent)'
}, {
  n: '03',
  title: 'Kapcsolat',
  desc: 'Kérj ajánlatot, 3 munkanapon belül válaszolunk.',
  href: '/kapcsolat',
  ring: 'var(--glow-cyan-md)',
  line: 'var(--line-cyan)'
}];
const BOOT_MS = 3400;
function Intro({
  speed = 1,
  onEnter,
  onRoute
}) {
  const T = React.useCallback(ms => Math.round(ms / speed), [speed]);
  const [pct, setPct] = React.useState(0);
  const [scale, setScale] = React.useState(1);
  const [stage, setStage] = React.useState('boot');
  const [narrow, setNarrow] = React.useState(() => window.matchMedia('(max-width: 560px)').matches);
  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 560px)');
    const on = e => setNarrow(e.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  React.useEffect(() => {
    if (document.getElementById('pryma-intro-css')) return;
    const s = document.createElement('style');
    s.id = 'pryma-intro-css';
    s.textContent = INTRO_CSS;
    document.head.appendChild(s);
  }, []);
  React.useEffect(() => {
    const vv = window.visualViewport;
    // the core is one rigid block: scale it to whatever the device actually shows
    const fit = () => {
      const w = vv?.width ?? window.innerWidth;
      const h = vv?.height ?? window.innerHeight;
      // 448 = the widest thing in the block (the locked PRYMA SOLUTIONS wordmark), not the robot frame
      setScale(Math.min(1, (w - 32) / 448, (h - 48) / 760));
    };
    fit();
    window.addEventListener('resize', fit);
    window.addEventListener('orientationchange', fit);
    vv?.addEventListener('resize', fit);
    return () => {
      window.removeEventListener('resize', fit);
      window.removeEventListener('orientationchange', fit);
      vv?.removeEventListener('resize', fit);
    };
  }, []);
  React.useEffect(() => {
    const start = T(900),
      span = T(1420);
    let raf;
    const t0 = performance.now();
    const tick = now => {
      const p = Math.max(0, Math.min(1, (now - t0 - start) / span));
      setPct(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const toGate = setTimeout(() => setStage('gate'), T(BOOT_MS));
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(toGate);
    };
  }, [T]);
  const enter = href => {
    onRoute?.(href); // route swaps under the intro before the wipe starts
    setStage('exit');
    setTimeout(() => onEnter(href), 620);
  };
  const anim = (name, dur, delay, ease = 'var(--ease-out)', fill = 'both') => `${name} ${T(dur)}ms ${ease} ${T(delay)}ms ${fill}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 9000,
      background: '#06081a',
      overflow: stage === 'boot' ? 'hidden' : 'auto',
      animation: stage === 'exit' ? 'pi-lift 600ms var(--ease-in-out) both' : undefined
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      backgroundImage: 'linear-gradient(var(--grid-line) 1px,transparent 1px),linear-gradient(90deg,var(--grid-line) 1px,transparent 1px)',
      backgroundSize: 'var(--grid-size) var(--grid-size)',
      opacity: .16,
      maskImage: 'radial-gradient(58% 52% at 50% 46%,#000 0%,transparent 78%)',
      WebkitMaskImage: 'radial-gradient(58% 52% at 50% 46%,#000 0%,transparent 78%)',
      animation: anim('pi-grid', 420, 0)
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--grad-mesh-violet),var(--grad-mesh-pink)',
      opacity: .5
    }
  }), stage === 'boot' ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      justifyItems: 'center',
      transform: `scale(${scale})`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: FRAME_W,
      height: FRAME_H,
      animation: `${anim('pi-jolt', 300, 900, 'var(--ease-out)')},${anim('pi-bloom', 440, 2660, 'var(--ease-in-out)')}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '22%',
      width: 520,
      height: 520,
      marginLeft: -260,
      marginTop: -260,
      borderRadius: 999,
      background: 'radial-gradient(circle,rgba(56,225,255,.34) 0%,rgba(157,92,255,.24) 38%,transparent 70%)',
      filter: 'blur(24px)',
      animation: anim('pi-aura', 900, 1180)
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      animation: anim('pi-drop', 940, 0, 'cubic-bezier(.22,.9,.24,1)')
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      maskImage: MASK_Y,
      WebkitMaskImage: MASK_Y
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      maskImage: MASK_X,
      WebkitMaskImage: MASK_X
    }
  }, FRAMES.map((f, i) => /*#__PURE__*/React.createElement("img", {
    key: f.src,
    src: f.src,
    alt: "",
    draggable: "false",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '50% 4%',
      userSelect: 'none',
      opacity: i === 0 ? 1 : 0,
      animation: f.kf ? anim(f.kf, f.dur, f.at, 'linear') : undefined
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 3,
      background: 'linear-gradient(90deg,transparent,rgba(56,225,255,.95),transparent)',
      filter: 'blur(.5px)',
      animation: anim('pi-scan', 1100, 1100, 'linear')
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(60% 40% at 50% 30%,rgba(226,240,255,.9),rgba(157,92,255,.35) 55%,transparent 80%)',
      mixBlendMode: 'screen',
      animation: `${anim('pi-flash', 420, 880, 'linear')},${anim('pi-flash', 520, 2150, 'linear')}`
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '10%',
      right: '10%',
      bottom: '16%',
      height: 2,
      background: 'linear-gradient(90deg,transparent,rgba(255,46,136,.9),rgba(56,225,255,.9),transparent)',
      animation: anim('pi-impact', 620, 880, 'var(--ease-out)')
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      marginTop: -18,
      font: 'var(--weight-medium) var(--mono-sm-size)/1 var(--font-mono)',
      letterSpacing: '.14em',
      color: 'var(--text-faint)',
      textTransform: 'uppercase',
      animation: `${anim('pi-hud', 300, 1080)},${anim('pi-bloom', 340, 2660, 'var(--ease-in-out)')}`
    }
  }, /*#__PURE__*/React.createElement("span", null, "sys // pryma core"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cyan-400)',
      textShadow: 'var(--glow-text-cyan)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: anim('pi-lock', 720, 2720)
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 56,
    tone: "gradient",
    showBar: true
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '100%',
      display: 'grid',
      alignContent: 'safe center',
      justifyItems: 'center',
      gap: 'clamp(20px,4vh,var(--space-xl))',
      padding: 'clamp(28px,7vh,88px) clamp(16px,5vw,64px)',
      animation: stage === 'exit' ? 'pi-out 420ms var(--ease-in-out) both' : undefined
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--space-md)',
      animation: 'pi-in 520ms var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 26,
    tone: "gradient",
    showBar: true
  }), /*#__PURE__*/React.createElement(Eyebrow, {
    variant: "bare",
    tone: "cyan",
    style: {
      fontFamily: 'var(--font-mono)',
      letterSpacing: '.18em'
    }
  }, "// v\xE1laszd ki, hova tartasz")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: narrow ? '1fr' : 'repeat(auto-fit,minmax(min(100%,232px),1fr))',
      gap: 'clamp(12px,2.4vw,var(--space-lg))',
      width: '100%',
      maxWidth: 1040
    }
  }, GATE.map((g, i) => /*#__PURE__*/React.createElement(Card, {
    key: g.n,
    variant: "surface",
    interactive: true,
    onClick: () => enter(g.href),
    padding: narrow ? 'var(--space-md)' : undefined,
    style: narrow ? {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      alignItems: 'center',
      columnGap: 'var(--space-md)',
      minHeight: 72,
      animation: `pi-in 520ms var(--ease-out) ${140 + i * 110}ms both`
    } : {
      display: 'grid',
      gap: 'var(--space-md)',
      alignContent: 'start',
      animation: `pi-in 520ms var(--ease-out) ${140 + i * 110}ms both`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'var(--radius-xl)',
      pointerEvents: 'none',
      boxShadow: `${g.ring}, inset 0 0 0 1px ${g.line}`,
      animation: `pi-flick 1040ms var(--ease-out) ${420 + i * 110}ms both`
    }
  }), narrow ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) var(--heading-md-size)/1 var(--font-mono)',
      color: 'var(--action-primary)',
      textShadow: 'var(--glow-text-pink)'
    }
  }, g.n), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 4,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--weight-bold) var(--heading-sm-size)/1.15 var(--font-display)',
      letterSpacing: 'var(--heading-sm-ls)',
      color: 'var(--text-hi)'
    }
  }, g.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--caption-size)/1.4 var(--font-ui)',
      color: 'var(--text-mute)',
      textWrap: 'pretty',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, g.desc)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      font: 'var(--weight-semibold) var(--body-md-size)/1 var(--font-mono)',
      color: 'var(--text-link)'
    }
  }, "\u2197")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) var(--display-md-size)/1 var(--font-mono)',
      color: 'var(--action-primary)',
      textShadow: 'var(--glow-text-pink)'
    }
  }, g.n), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 99,
      background: 'var(--grad-brand)'
    }
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--weight-bold) var(--heading-lg-size)/var(--heading-lg-lh) var(--font-display)',
      letterSpacing: 'var(--heading-lg-ls)',
      color: 'var(--text-hi)'
    }
  }, g.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--body-md-size)/var(--body-md-lh) var(--font-ui)',
      color: 'var(--text-mute)',
      textWrap: 'pretty'
    }
  }, g.desc), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) var(--button-cap-size)/1 var(--font-ui)',
      letterSpacing: 'var(--button-cap-ls)',
      textTransform: 'uppercase',
      color: 'var(--text-link)'
    }
  }, "Megn\xE9zem \u2197"))))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => enter('/'),
    style: {
      appearance: 'none',
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      font: 'var(--weight-medium) var(--caption-size)/1 var(--font-mono)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      padding: '14px 18px',
      minHeight: 44,
      animation: 'pi-in 520ms var(--ease-out) 520ms both'
    }
  }, "Tov\xE1bb a kezd\u0151lapra \u2192")));
}
Object.assign(window, {
  Intro,
  INTRO_REVEAL_ANIM: 'pi-in 620ms var(--ease-out) both'
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Intro.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Eyebrow,
  Icon,
  MeshBackdrop,
  TextLink
} = window.PrymaDesignSystem_286b6c;
const PACKAGES = [{
  t: 'Bemutatkozó oldal',
  b: 'Egy jól felépített oldal, amin minden fontos elfér: mit csinálsz, kinek, és hogyan lehet elérni téged.',
  items: ['Egy oldal, mobilra optimalizálva', 'Kapcsolatfelvételi űrlap', 'Domain és élesítés beállítva']
}, {
  t: 'Több oldalas weboldal',
  b: 'Ha több szolgáltatásod van, vagy referenciákat és árakat is szeretnél kiírni.',
  items: ['3–6 aloldal', 'Szerkeszthető tartalom', 'Alap keresőoptimalizálás']
}, {
  t: 'Arculat és weboldal',
  b: 'Ha a nulláról induló vállalkozásnak egyszerre kell megjelenés és oldal.',
  items: ['Logó és színvilág', 'Tipográfia és használati útmutató', 'A kész weboldal az új arculattal']
}];
function ServicesScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MeshBackdrop, {
    intensity: "soft",
    grid: false,
    contentStyle: {
      padding: 'clamp(40px,7vw,80px) 0 clamp(36px,6vw,64px)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(AppearGroup, {
    immediate: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xl)',
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "violet"
  }, "Szolg\xE1ltat\xE1sok"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--display-xl-size)',
      fontWeight: 'var(--display-xl-weight)',
      lineHeight: 'var(--display-xl-lh)',
      letterSpacing: 'var(--display-xl-ls)',
      color: 'var(--text-hi)',
      textWrap: 'pretty'
    }
  }, "Amit el tudok v\xE1llalni."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-lg-size)',
      lineHeight: 'var(--body-lg-lh)',
      letterSpacing: 'var(--body-lg-ls)',
      color: 'var(--text-mute)'
    }
  }, "Kis v\xE1llalkoz\xE1sokkal \xE9s indul\xF3 \xF6tletekkel dolgozom. Nem minden projekt ig\xE9nyel mindent, ez\xE9rt mindig azzal kezd\xFCnk, ami a legt\xF6bbet hozza."), /*#__PURE__*/React.createElement("div", {
    className: "r-cta-stack",
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNavigate('/kapcsolat')
  }, "K\xE9rj aj\xE1nlatot"))))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(AppearGroup, {
    className: "r-g3"
  }, /*#__PURE__*/React.createElement(FeatureTile, {
    icon: "palette",
    tone: "pink",
    title: "Arculat",
    body: "Log\xF3, sz\xEDnek, bet\u0171t\xEDpusok \xE9s egy r\xF6vid \xFAtmutat\xF3. C\xE9l, hogy magabiztosan tudd haszn\xE1lni, ne csak n\xE9zni."
  }), /*#__PURE__*/React.createElement(FeatureTile, {
    icon: "layers",
    tone: "violet",
    title: "Weboldal",
    body: "Tervez\xE9s \xE9s fejleszt\xE9s egy k\xE9zb\u0151l. Gyors, mobilon is j\xF3, \xE9s nem kell hozz\xE1 bonyolult rendszert kezelned."
  }), /*#__PURE__*/React.createElement(FeatureTile, {
    icon: "target",
    tone: "cyan",
    title: "Marketing alapok",
    body: "Kinek sz\xF3lsz, mit mondasz r\xF3la, \xE9s melyik k\xE9t csatorn\xE1n \xE9rdemes ezt elkezdeni."
  }))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Csomagok",
    title: "H\xE1rom tipikus indul\xE1s.",
    lead: "Ezek a leggyakoribb munk\xE1k. Az \xE1rat a terjedelem alapj\xE1n adom meg, fix \xF6sszegben, m\xE9g a kezd\xE9s el\u0151tt.",
    tone: "cyan"
  }), /*#__PURE__*/React.createElement(AppearGroup, {
    className: "r-g3",
    style: {
      marginTop: 'var(--space-48)',
      alignItems: 'stretch'
    }
  }, PACKAGES.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.t,
    variant: "surface",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--heading-md-size)',
      fontWeight: 'var(--heading-md-weight)',
      color: 'var(--text-hi)'
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-lh)',
      color: 'var(--text-mute)'
    }
  }, p.b), /*#__PURE__*/React.createElement(CheckList, {
    items: p.items
  }))))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "r-g2"
  }, /*#__PURE__*/React.createElement(Appear, {
    from: "left",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "pink"
  }, "J\xF3 tudni"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--display-md-size)',
      fontWeight: 700,
      letterSpacing: 'var(--display-md-ls)',
      lineHeight: 'var(--display-md-lh)',
      color: 'var(--text-hi)'
    }
  }, "Miel\u0151tt neki\xE1llunk."), /*#__PURE__*/React.createElement(CheckList, {
    tone: "pink",
    items: ['Egy bemutatkozó oldal jellemzően 2–3 hét, összetettebb oldal 4–6 hét.', 'A szöveget közösen rakjuk össze, nem kell készen küldened.', 'Ha nincs fotód, mutatok megoldást arra is.', 'Élesítés után egy hónapig javítom, ami menet közben derül ki.']
  })), /*#__PURE__*/React.createElement(Appear, {
    from: "right",
    delay: 120
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "outline",
    padding: "var(--space-48)",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 22,
    color: "var(--violet-400)"
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--heading-sm-size)',
      fontWeight: 600,
      color: 'var(--text-hi)'
    }
  }, "Nem tudod, melyik kell?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-lh)',
      color: 'var(--text-mute)'
    }
  }, "\xCDrj p\xE1r sort a v\xE1llalkoz\xE1sodr\xF3l, \xE9s meg\xEDrom, melyik v\xE1ltozat el\xE9g most, \xE9s mi az, ami r\xE1\xE9r k\xE9s\u0151bb."), /*#__PURE__*/React.createElement(TextLink, {
    href: "mailto:hello@pryma.solutions"
  }, "hello@pryma.solutions"))))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Karbantart\xE1s",
    title: "Miut\xE1n \xE9les\xEDtett\xFCnk.",
    lead: "A weboldal nem \xE1ll meg az \xE9les\xEDt\xE9sn\xE9l. Ezekben tudok seg\xEDteni ut\xE1na is.",
    tone: "violet"
  }), /*#__PURE__*/React.createElement(AppearGroup, {
    className: "r-g3",
    style: {
      marginTop: 'var(--space-48)'
    }
  }, /*#__PURE__*/React.createElement(FeatureTile, {
    icon: "shield-check",
    tone: "violet",
    title: "Biztons\xE1g \xE9s friss\xEDt\xE9s",
    body: "Rendszeres ment\xE9s \xE9s a h\xE1tt\xE9rben fut\xF3 rendszerek frissen tart\xE1sa, hogy az oldal ne \xE1lljon le."
  }), /*#__PURE__*/React.createElement(FeatureTile, {
    icon: "pencil",
    tone: "pink",
    title: "Tartalom karbantart\xE1sa",
    body: "Sz\xF6veg, k\xE9p vagy \xE1r m\xF3dosult? Sz\xF3lsz, \xE9s \xE1tvezetem, nem kell hozz\xE1 magadnak beleny\xFAlnod."
  }), /*#__PURE__*/React.createElement(FeatureTile, {
    icon: "life-buoy",
    tone: "cyan",
    title: "Gyors seg\xEDts\xE9g",
    body: "Ha valami elromlik vagy elakadsz, r\xF6vid id\u0151n bel\xFCl v\xE1laszolok \xE9s megoldjuk."
  }))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(Appear, {
    from: "scale"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "band",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-32)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--heading-lg-size)',
      fontWeight: 700,
      color: 'var(--text-on-accent)'
    }
  }, "Besz\xE9lj\xFCk \xE1t, mire van sz\xFCks\xE9ged."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-md-size)',
      color: 'rgba(255,255,255,.82)'
    }
  }, "F\xE9l \xF3ra, konkr\xE9t k\xE9rd\xE9sekkel. Ut\xE1na k\xFCld\xF6k egy tervet \xE9s egy \xE1rat.")), /*#__PURE__*/React.createElement(Button, {
    variant: "onAccent",
    onClick: () => onNavigate('/kapcsolat'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Kapcsolatfelv\xE9tel")))));
}
Object.assign(window, {
  ServicesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/demo-asztalos.jsx
try { (() => {
/* Demó — asztalos / kivitelező. Minimál, szöveges, sok fehér tér, egyetlen nagy fotó. */

function WorkSection({
  t,
  dev,
  alt,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: alt ? t.bg2 : t.bg,
      padding: dpick(dev, '52px 0', '72px 0', '110px 0'),
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '0 ' + dpick(dev, '22px', '48px', '80px')
    }
  }, children));
}
function WorkH({
  t,
  dev,
  size,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: t.f.d,
      fontWeight: 600,
      fontSize: dpick(dev, size * 0.64, size * 0.82, size),
      lineHeight: 1.1,
      letterSpacing: '-.03em',
      color: t.ink,
      margin: 0,
      textWrap: 'pretty',
      ...style
    }
  }, children);
}
const WORK_ITEMS = [['01', 'Konyhabútor', 'Felmérés a helyszínen, gyártás műhelyben, beépítés egy nap alatt. Gépesítés egyeztetve.', 'konyha · beépítés után', 'utensils', 'plan'], ['02', 'Gardrób és előszoba', 'Beépített szekrény ferde falra, tetőtérbe, lépcső alá is. Tolóajtós és nyílóajtós kivitel.', 'gardrób · tolóajtó', 'shirt', 'grid'], ['03', 'Fürdőszobabútor', 'Vízálló lapból, mosdó alá szabva, felül fali szekrénnyel.', 'fürdőszobabútor · mosdó', 'droplets', 'plan'], ['04', 'Egyedi asztalok', 'Tömörfa lappal, fém vagy fa lábbal, méretre.', 'étkezőasztal · tömörfa', 'ruler', 'grain']];
const WORK_SPEC = [['Korpusz', 'bútorlap, 18 mm'], ['Front', 'festett MDF vagy tömör tölgy'], ['Vasalat', 'csillapított pántok, teleláthatós fiók'], ['Munkalap', 'kompakt lemez vagy tömörfa'], ['Garancia', '5 év a szerkezetre']];

/* Faerezet CSS-ből: az alapszín fölött három, eltérő ritmusú vonalréteg. */
const WOOD_TONES = {
  tolgy: {
    a: '#c9a469',
    b: '#8a5f2c'
  },
  bukk: {
    a: '#dcbc93',
    b: '#a97d4c'
  },
  koris: {
    a: '#e1cdac',
    b: '#ab9067'
  },
  dio: {
    a: '#8d6041',
    b: '#40240f'
  },
  mdf: {
    a: '#eae6de',
    b: '#c1baac'
  }
};
const WOOD_SPECIES = [['Tölgy', 'front, lakkozva', 'tolgy'], ['Bükk', 'gőzölt, munkalaphoz', 'bukk'], ['Kőris', 'nyílt pórusú, világos', 'koris'], ['Dió', 'betétek, olajozva', 'dio'], ['Festett MDF', 'matt, RAL szerint', 'mdf']];
function woodFill(tone) {
  return {
    background: ['repeating-linear-gradient(0deg,' + tint(tone.b, 24) + ' 0 1px, transparent 1px 6px)', 'repeating-linear-gradient(0deg,' + tint(tone.b, 13) + ' 0 2px, transparent 2px 15px)', 'repeating-linear-gradient(0deg, transparent 0 37px,' + tint(tone.b, 32) + ' 37px 39px, transparent 39px 96px)', 'linear-gradient(180deg,' + tone.a + ',' + mix(tone.a, tone.b, 90) + ')'].join(',')
  };
}

/* Fotóhely faerezetes lapon — a feliratos tábla jelzi, mi kerül ide. */
function WoodPlate({
  t,
  label,
  ratio = '4 / 3',
  tone = 'tolgy',
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      aspectRatio: ratio,
      border: '1px solid ' + t.line,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      ...woodFill(WOOD_TONES[tone]),
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.m,
      fontSize: 10,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: t.ink,
      background: mix(t.bg, 'transparent', 90),
      padding: '5px 9px',
      border: '1px solid ' + t.line,
      textAlign: 'center',
      lineHeight: 1.4
    }
  }, label));
}

/* Fotóhely faerezetes lapon — illusztrációs módban mért rajz lép a helyére. */
function WorkArt({
  t,
  gfx,
  label,
  ratio = '4 / 3',
  tone = 'tolgy',
  motif = 'plan',
  icon,
  glyph,
  style,
  className
}) {
  if (gfx === 'illu') return /*#__PURE__*/React.createElement(Illu, {
    t: t,
    motif: motif,
    icon: icon,
    ratio: ratio,
    glyph: glyph,
    className: className,
    style: {
      background: t.bg,
      ...style
    }
  });
  return /*#__PURE__*/React.createElement(WoodPlate, {
    t: t,
    label: label,
    ratio: ratio,
    tone: tone,
    className: className,
    style: style
  });
}

/* Konyhabútor elölnézet — mért rajz, csak téglalapokból. */
function CabinetFront({
  t,
  dev
}) {
  const gap = dpick(dev, 3, 4, 5);
  const bd = '1px solid ' + t.line;
  const pad = dpick(dev, 4, 5, 7);
  const bank = (flex, rows, handle, tone) => /*#__PURE__*/React.createElement("div", {
    style: {
      flex,
      display: 'flex',
      flexDirection: 'column',
      gap
    }
  }, Array.from({
    length: rows
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      border: bd,
      display: 'flex',
      alignItems: handle === 'top' ? 'flex-start' : 'center',
      justifyContent: handle === 'top' ? 'center' : 'flex-end',
      padding: pad,
      ...woodFill(WOOD_TONES[tone])
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: handle === 'top' ? '46%' : 2,
      height: handle === 'top' ? 2 : '42%',
      background: tint(t.ink, 40)
    }
  }))));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: dpick(dev, 10, 12, 14)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: dpick(dev, '4 / 3', '2 / 1', '21 / 8'),
      display: 'flex',
      flexDirection: 'column',
      gap: dpick(dev, 7, 10, 13)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 32%',
      display: 'flex',
      gap
    }
  }, bank(1.15, 1, 'bottom', 'tolgy'), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1.1,
      border: bd,
      ...woodFill(WOOD_TONES.mdf),
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      padding: pad
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.m,
      fontSize: dpick(dev, 7, 8, 9),
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: t.inkMute
    }
  }, "p\xE1raelsz\xEDv\xF3")), bank(1.15, 1, 'bottom', 'tolgy'), bank(0.7, 2, 'top', 'tolgy')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 ' + dpick(dev, 7, 9, 12) + 'px',
      border: bd,
      ...woodFill(WOOD_TONES.dio)
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      gap
    }
  }, bank(1, 3, 'top', 'tolgy'), bank(1.1, 1, 'bottom', 'tolgy'), bank(1.1, 1, 'bottom', 'tolgy'), bank(0.9, 2, 'bottom', 'tolgy'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: t.line
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.m,
      fontSize: 10,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: t.inkMute,
      whiteSpace: 'nowrap'
    }
  }, "3200 mm \xB7 t\xF6lgy front \xB7 t\xF6m\xF6rfa munkalap"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: t.line
    }
  })));
}
function WorkshopPage({
  t,
  dev,
  v = 'list',
  motion = true,
  gfx = 'foto'
}) {
  const ico = gfx !== 'foto';
  const [open, setOpen] = React.useState('01');
  const [menu, setMenu] = React.useState(false);
  const links = ['Munkák', 'Folyamat', 'Anyagok', 'Kapcsolat'];
  const heroBody = align => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: dpick(dev, 22, 26, 34),
      maxWidth: 780,
      margin: align === 'center' ? '0 auto' : 0,
      textAlign: align === 'center' ? 'center' : 'left',
      alignItems: align === 'center' ? 'center' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    t: t
  }, "Asztalos \xB7 kivitelez\xE9s \xB7 Pest megye"), /*#__PURE__*/React.createElement(WorkH, {
    t: t,
    dev: dev,
    size: 56
  }, "Be\xE9p\xEDtett b\xFAtor, m\xE9retre, egy m\u0171helyb\u0151l."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: t.inkMute,
      fontSize: dpick(dev, 15, 16, 18),
      maxWidth: 560,
      margin: 0
    }
  }, "Konyha, gardr\xF3b, f\xFCrd\u0151szobab\xFAtor. A felm\xE9r\xE9st, a gy\xE1rt\xE1st \xE9s a be\xE9p\xEDt\xE9st ugyanaz az ember v\xE9gzi, \xEDgy nincs kire v\xE1rni."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: align === 'center' ? 'center' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(DemoBtn, {
    t: t
  }, "Felm\xE9r\xE9st k\xE9rek"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.m,
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: t.inkMute
    }
  }, "V\xE1lasz 2 napon bel\xFCl")));
  return /*#__PURE__*/React.createElement("div", {
    className: "dmo",
    style: {
      background: t.bg,
      color: t.ink,
      fontFamily: t.f.b,
      fontSize: 15,
      lineHeight: 1.7,
      minHeight: '100%',
      ...demoVars(t)
    }
  }, /*#__PURE__*/React.createElement(DemoStyle, null), /*#__PURE__*/React.createElement("header", {
    style: {
      padding: dpick(dev, '18px 22px', '22px 48px', '26px 80px'),
      borderBottom: '1px solid ' + t.lineSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      border: '1px solid ' + t.line,
      ...woodFill(WOOD_TONES.tolgy)
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.d,
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: '-.01em',
      color: t.ink
    }
  }, "Asztalosmunka")), dev !== 'mobile' ? /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      fontFamily: t.f.m,
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: t.inkMute
    }
  }, links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    className: "dmo-link"
  }, l))) : /*#__PURE__*/React.createElement("span", {
    onClick: () => setMenu(!menu),
    className: "dmo-tap",
    style: {
      fontFamily: t.f.m,
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: t.accent
    }
  }, menu ? 'Bezár' : 'Menü')), dev === 'mobile' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: menu ? '1fr' : '0fr',
      overflow: 'hidden',
      transition: 'grid-template-rows .38s cubic-bezier(.2,.8,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      paddingTop: menu ? 12 : 0,
      transition: 'padding .38s'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    className: "dmo-row",
    style: {
      fontSize: 15,
      color: t.ink,
      padding: '11px 4px',
      borderTop: '1px solid ' + t.lineSoft
    }
  }, l))))), v === 'wide' && /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    from: "scale",
    className: "dmo-zoom"
  }, /*#__PURE__*/React.createElement(WorkArt, {
    t: t,
    gfx: gfx,
    ratio: dpick(dev, '3 / 2', '2 / 1', '21 / 7'),
    label: "elk\xE9sz\xFClt konyha \xB7 helysz\xEDni fot\xF3",
    motif: "plan",
    icon: "utensils",
    glyph: 32,
    style: {
      border: 'none'
    }
  })), v === 'index' ? /*#__PURE__*/React.createElement(WorkSection, {
    t: t,
    dev: dev,
    style: {
      paddingBottom: dpick(dev, 44, 60, 80)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: dpick(dev, '1fr', '.3fr 1fr', '.28fr 1fr'),
      gap: dpick(dev, 26, 34, 56),
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    from: "left",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      borderTop: '1px solid ' + t.line,
      paddingTop: 12
    }
  }, WORK_ITEMS.map(([n, h]) => /*#__PURE__*/React.createElement("span", {
    key: n,
    onClick: () => setOpen(n),
    className: "dmo-row dmo-tap",
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'baseline',
      padding: '7px 6px',
      fontFamily: t.f.m,
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: open === n ? t.accent : t.inkMute
    }
  }, /*#__PURE__*/React.createElement("span", null, n), /*#__PURE__*/React.createElement("span", {
    style: {
      color: open === n ? t.accent : t.ink,
      letterSpacing: 0,
      textTransform: 'none',
      fontFamily: t.f.b,
      fontSize: 13
    }
  }, h)))), /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    delay: 120
  }, heroBody('left')))) : /*#__PURE__*/React.createElement(WorkSection, {
    t: t,
    dev: dev,
    style: {
      paddingBottom: dpick(dev, 44, 60, 80)
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion
  }, heroBody(v === 'wide' ? 'center' : 'left'))), /*#__PURE__*/React.createElement(WorkSection, {
    t: t,
    dev: dev,
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid ' + t.line
    }
  }, WORK_ITEMS.map(([n, h, b, img, gi, mo], i) => {
    const on = open === n;
    return /*#__PURE__*/React.createElement(Reveal, {
      key: n,
      motion: motion,
      delay: i * 90,
      className: "dmo-row",
      style: {
        borderBottom: '1px solid ' + t.line
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: () => setOpen(on ? '' : n),
      style: {
        display: 'grid',
        gridTemplateColumns: dpick(dev, '38px 1fr 20px', '48px 1fr 24px', '58px 1fr 28px'),
        gap: dpick(dev, 14, 24, 40),
        padding: dpick(dev, '20px 6px', '24px 6px', '30px 6px'),
        alignItems: 'baseline',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: t.f.m,
        fontSize: 11,
        letterSpacing: '.1em',
        color: t.accent
      }
    }, n), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, ico && /*#__PURE__*/React.createElement(Gly, {
      name: gi,
      size: 18,
      color: on ? t.accent : t.inkMute
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: t.f.d,
        fontWeight: 600,
        fontSize: dpick(dev, 19, 21, 24),
        letterSpacing: '-.02em',
        color: on ? t.accent : t.ink,
        transition: 'color .25s'
      }
    }, h)), /*#__PURE__*/React.createElement("span", {
      style: {
        justifySelf: 'end',
        width: 14,
        height: 14,
        position: 'relative',
        transform: on ? 'rotate(45deg)' : 'none',
        transition: 'transform .35s cubic-bezier(.2,.8,.2,1)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 6.5,
        left: 0,
        width: 14,
        height: 1,
        background: on ? t.accent : t.inkMute
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 6.5,
        top: 0,
        height: 14,
        width: 1,
        background: on ? t.accent : t.inkMute
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: on ? '1fr' : '0fr',
        overflow: 'hidden',
        transition: 'grid-template-rows .42s cubic-bezier(.2,.8,.2,1)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: dpick(dev, '1fr', '1fr .8fr', '1fr .7fr'),
        gap: dpick(dev, 18, 26, 40),
        padding: dpick(dev, '0 6px 22px 52px', '0 6px 26px 72px', '0 6px 32px 98px'),
        opacity: on ? 1 : 0,
        transition: 'opacity .35s .06s'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        color: t.inkMute,
        fontSize: dpick(dev, 14, 15, 15),
        margin: 0,
        maxWidth: 520
      }
    }, b), /*#__PURE__*/React.createElement("div", {
      className: "dmo-zoom"
    }, /*#__PURE__*/React.createElement(WorkArt, {
      t: t,
      gfx: gfx,
      ratio: "16 / 10",
      label: img,
      tone: ['tolgy', 'koris', 'mdf', 'dio'][i % 4],
      motif: mo,
      icon: gi,
      glyph: 24
    }))))));
  }))), /*#__PURE__*/React.createElement(WorkSection, {
    t: t,
    dev: dev,
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: dpick(dev, 16, 18, 22)
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    t: t
  }, "El\xF6ln\xE9zet"), /*#__PURE__*/React.createElement(CabinetFront, {
    t: t,
    dev: dev
  }))), v !== 'wide' && /*#__PURE__*/React.createElement("div", {
    className: "dmo-zoom"
  }, /*#__PURE__*/React.createElement(WorkArt, {
    t: t,
    gfx: gfx,
    ratio: dpick(dev, '3 / 2', '2 / 1', '21 / 9'),
    label: "elk\xE9sz\xFClt konyha \xB7 helysz\xEDni fot\xF3",
    motif: "grain",
    icon: "hammer",
    glyph: 32,
    style: {
      border: 'none'
    }
  })), /*#__PURE__*/React.createElement(WorkSection, {
    t: t,
    dev: dev
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: dpick(dev, '1fr', '1fr', '.44fr 1fr'),
      gap: dpick(dev, 26, 34, 64),
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    t: t
  }, "Folyamat"), /*#__PURE__*/React.createElement(WorkH, {
    t: t,
    dev: dev,
    size: 34
  }, "N\xE9gy szakasz, kisz\xE1m\xEDthat\xF3 temp\xF3ban.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: dpick(dev, '1fr', '1fr 1fr', '1fr 1fr'),
      gap: dpick(dev, 24, 30, 42)
    }
  }, [['Felmérés', 'Kimegyek, lemérem a helyet, és átbeszéljük, mire használod majd. Ez díjmentes.', 'ruler'], ['Terv és ajánlat', 'Rajz és fix árajánlat, tételesen. Ebben már benne van az anyag és a beépítés is.', 'pencil'], ['Gyártás', 'Műhelyben készül el, jellemzően 3–5 hét. Közben fotót küldök az állásról.', 'hammer'], ['Beépítés', 'Egy-két nap a helyszínen. Utána takarítva, a hulladékot elviszem.', 'wrench']].map(([h, b, gi], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: h,
    motion: motion,
    delay: i * 100,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontFamily: t.f.m,
      fontSize: 11,
      color: t.accent,
      letterSpacing: '.1em'
    }
  }, '0' + (i + 1), ico && /*#__PURE__*/React.createElement(Gly, {
    name: gi,
    size: 15,
    color: t.accent
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.d,
      fontWeight: 600,
      fontSize: 17,
      letterSpacing: '-.01em',
      color: t.ink
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      color: t.inkMute,
      fontSize: 14,
      margin: 0
    }
  }, b)))))), /*#__PURE__*/React.createElement(WorkSection, {
    t: t,
    dev: dev,
    alt: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: dpick(dev, '1fr', '1fr', '.44fr 1fr'),
      gap: dpick(dev, 26, 34, 64),
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    t: t
  }, "Anyagok"), /*#__PURE__*/React.createElement(WorkH, {
    t: t,
    dev: dev,
    size: 34
  }, "Amib\u0151l dolgozom.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    style: {
      display: 'grid',
      gridTemplateColumns: dpick(dev, '1fr 1fr', 'repeat(5, 1fr)', 'repeat(5, 1fr)'),
      gap: dpick(dev, 12, 14, 18),
      marginBottom: dpick(dev, 28, 32, 40)
    }
  }, WOOD_SPECIES.map(([name, note, tone]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      aspectRatio: '1 / 1',
      border: '1px solid ' + t.line,
      ...woodFill(WOOD_TONES[tone])
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.d,
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '-.01em',
      color: t.ink
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.m,
      fontSize: 9.5,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: t.inkMute,
      lineHeight: 1.5
    }
  }, note)))), WORK_SPEC.map(([k, val], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: k,
    motion: motion,
    delay: i * 70,
    className: "dmo-row",
    style: {
      display: 'grid',
      gridTemplateColumns: dpick(dev, '110px 1fr', '150px 1fr', '190px 1fr'),
      gap: 16,
      padding: '14px 8px',
      borderTop: '1px solid ' + t.line,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.m,
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: t.inkMute
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: dpick(dev, 14, 15, 16),
      color: t.ink
    }
  }, val)))))), /*#__PURE__*/React.createElement(WorkSection, {
    t: t,
    dev: dev
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    style: {
      maxWidth: 820,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: t.f.d,
      fontWeight: 500,
      fontSize: dpick(dev, 20, 24, 28),
      lineHeight: 1.4,
      letterSpacing: '-.02em',
      color: t.ink,
      margin: 0
    }
  }, "\u201EA megbesz\xE9lt h\xE9ten kezdett, a megbesz\xE9lt \xE1ron. A konyha k\xE9t \xE9ve van meg, egyetlen ajt\xF3 sem l\xF3g el.\u201D"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.m,
      fontSize: 11,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: t.inkMute
    }
  }, "Megb\xEDz\xF3 \xB7 konyha, 2024"))), /*#__PURE__*/React.createElement(WorkSection, {
    t: t,
    dev: dev,
    style: {
      borderTop: '1px solid ' + t.line
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: dpick(dev, '1fr', '1fr 1fr', '1fr 1fr'),
      gap: dpick(dev, 26, 34, 64),
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(WorkH, {
    t: t,
    dev: dev,
    size: 38
  }, "Van egy m\xE9ret \xE9s egy \xF6tlet?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: t.inkMute,
      margin: 0,
      maxWidth: 420
    }
  }, "\xCDrd meg, milyen helyis\xE9gr\u0151l van sz\xF3. Ha kell, kimegyek megn\xE9zni."), /*#__PURE__*/React.createElement(DemoBtn, {
    t: t,
    style: {
      alignSelf: 'flex-start'
    }
  }, "Felm\xE9r\xE9st k\xE9rek")), /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    delay: 110,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontFamily: t.f.m,
      fontSize: 12,
      letterSpacing: '.04em',
      color: t.ink
    }
  }, [['+36 20 987 6543', 'phone', false], ['muhely@example.hu', 'mail', false], ['Műhely: Pest megye', 'map-pin', true], ['H–P 7:00–16:00', 'clock', true]].map(([txt, gi, mute]) => /*#__PURE__*/React.createElement("span", {
    key: txt,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      color: mute ? t.inkMute : t.ink
    }
  }, ico && /*#__PURE__*/React.createElement(Gly, {
    name: gi,
    size: 14,
    color: t.accent
  }), txt))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: t.bg2,
      padding: dpick(dev, '24px 22px', '28px 48px', '32px 80px'),
      borderTop: '1px solid ' + t.line
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      fontFamily: t.f.m,
      fontSize: 10,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: t.inkMute
    }
  }, "Asztalosmunka \xB7 egy\xE9ni v\xE1llalkoz\xF3 \xB7 ad\xF3sz\xE1m 12345678-1-42")));
}
Object.assign(window, {
  WorkshopPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/demo-asztalos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/demo-edzo.jsx
try { (() => {
/* Demó — személyi edző. Sötét, kondenzált nagybetűs, rövid kártyás felépítés, kevés fotó. */

function TrainerSection({
  t,
  dev,
  alt,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: alt ? t.bg2 : t.bg,
      padding: dpick(dev, '48px 0', '64px 0', '92px 0'),
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 ' + dpick(dev, '20px', '40px', '60px')
    }
  }, children));
}
function TrainerH({
  t,
  dev,
  size,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: t.f.d,
      fontWeight: 800,
      fontSize: dpick(dev, size * 0.62, size * 0.8, size),
      lineHeight: 1.02,
      letterSpacing: '-.025em',
      textTransform: 'uppercase',
      color: t.ink,
      margin: 0,
      textWrap: 'balance',
      ...style
    }
  }, children);
}
const TRAINER_PROGRAMS = [{
  n: 'Alapozó',
  d: '12 hét',
  ic: 'sprout',
  b: 'Ha évek óta nem edzettél. Technika, terhelés lassan felépítve, hetente két alkalom.',
  tags: ['kezdő', '2×/hét'],
  more: ['Mozgásvizsgálat az első alkalommal', 'Saját testsúlyos alapok, majd súlyzó', 'Heti visszamérés, írásos terv']
}, {
  n: 'Erő',
  d: 'haladó',
  ic: 'dumbbell',
  b: 'Ha már van rutinod, de megállt a fejlődés. Számok, terv, kontrollált progresszió.',
  tags: ['haladó', '3×/hét'],
  more: ['Erőfelmérés guggolás, nyomás, húzás', 'Blokkokra bontott, számolt terhelés', 'Technikavideó-elemzés']
}, {
  n: 'Visszatérés',
  d: 'rehab után',
  ic: 'heart-pulse',
  b: 'Gyógytorna után, orvosi javaslat mentén. Óvatos tempó, folyamatos visszajelzés.',
  tags: ['rehab', '1–2×/hét'],
  more: ['Egyeztetés a gyógytornásszal', 'Fájdalomskála minden alkalommal', 'Lassított tempó, sok kontroll']
}];
const TRAINER_PRICES = {
  alkalmi: [{
    n: '1 alkalom',
    p: '12 000 Ft',
    b: 'Ha csak ki akarod próbálni.',
    hi: false
  }, {
    n: '8 alkalom',
    p: '88 000 Ft',
    b: 'A legtöbben ezt választják. Két hónap, heti egy edzés.',
    hi: true
  }, {
    n: 'Online terv',
    p: '24 000 Ft / hó',
    b: 'Havi terv, videós technikaellenőrzés.',
    hi: false
  }],
  berlet: [{
    n: 'Heti 1 alkalom',
    p: '44 000 Ft / hó',
    b: 'Négy edzés havonta, fix időpontban.',
    hi: false
  }, {
    n: 'Heti 2 alkalom',
    p: '82 000 Ft / hó',
    b: 'A felépített programokhoz ez az alap.',
    hi: true
  }, {
    n: 'Heti 2 + online',
    p: '99 000 Ft / hó',
    b: 'Edzések és a közbeni napok terve is.',
    hi: false
  }]
};

/* Számjegyre animáló statisztika; ami nem szám, az simán belép. */
function TrainerStat({
  t,
  dev,
  value,
  label,
  motion,
  big,
  icon
}) {
  const ref = React.useRef(null);
  const on = useInView(ref, motion);
  const num = /^[\d]+([.,][\d]+)?%?$/.test(value);
  const dec = num && /[.,]/.test(value);
  const target = num ? parseFloat(value.replace(',', '.')) : 0;
  const live = useCount(target, num && on && motion, 1100);
  const val = num && !motion ? target : live;
  const shown = num ? (dec ? val.toFixed(1).replace('.', ',') : String(Math.round(val))) + (value.indexOf('%') > -1 ? '%' : '') : value;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      background: t.bg,
      padding: dpick(dev, '18px 16px', '22px 20px', big ? '32px 28px' : '26px 24px'),
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      opacity: on ? 1 : 0,
      transform: on ? 'none' : 'translateY(14px)',
      transition: 'opacity .6s cubic-bezier(.2,.8,.2,1), transform .6s cubic-bezier(.2,.8,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.d,
      fontWeight: 800,
      fontSize: dpick(dev, big ? 32 : 26, big ? 40 : 30, big ? 54 : 36),
      letterSpacing: '-.03em',
      color: t.accent,
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums'
    }
  }, shown), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: t.f.m,
      fontSize: 10,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: t.inkMute
    }
  }, icon && /*#__PURE__*/React.createElement(Gly, {
    name: icon,
    size: 12,
    color: t.accent
  }), label));
}
function TrainerPage({
  t,
  dev,
  v = 'left',
  motion = true,
  gfx = 'foto'
}) {
  const ico = gfx !== 'foto';
  const cols = dpick(dev, '1fr', 'repeat(3,1fr)', 'repeat(3,1fr)');
  const [prog, setProg] = React.useState(0);
  const [plan, setPlan] = React.useState('alkalmi');
  const [menu, setMenu] = React.useState(false);
  const links = ['Programok', 'Menete', 'Árak', 'Kapcsolat'];
  const stats = [['1:1', 'edzés, nem csoport', 'user'], ['12', 'hetes felépítés', 'calendar-days'], ['60', 'perc alkalmanként', 'timer'], ['H–Szo', 'reggel 6-tól', 'clock']];
  const statBar = big => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: dpick(dev, '1fr 1fr', 'repeat(4,1fr)', v === 'split' ? '1fr 1fr' : 'repeat(4,1fr)'),
      gap: 1,
      background: t.line,
      border: '1px solid ' + t.line
    }
  }, stats.map(([val, l, gi]) => /*#__PURE__*/React.createElement(TrainerStat, {
    key: l,
    t: t,
    dev: dev,
    value: val,
    label: l,
    motion: motion,
    big: big,
    icon: ico ? gi : null
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: "dmo",
    style: {
      background: t.bg,
      color: t.ink,
      fontFamily: t.f.b,
      fontSize: 15,
      lineHeight: 1.6,
      minHeight: '100%',
      ...demoVars(t)
    }
  }, /*#__PURE__*/React.createElement(DemoStyle, null), /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      borderBottom: '1px solid ' + t.lineSoft,
      padding: dpick(dev, '16px 20px', '18px 40px', '20px 60px')
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.d,
      fontWeight: 800,
      fontSize: 17,
      letterSpacing: '-.02em',
      textTransform: 'uppercase',
      color: t.ink
    }
  }, "Szem\xE9lyi", /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.accent
    }
  }, "edz\xE9s")), dev !== 'mobile' && /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      marginLeft: 'auto'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    className: "dmo-link",
    style: {
      fontFamily: t.f.d,
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: t.inkMute
    }
  }, l))), dev === 'mobile' && /*#__PURE__*/React.createElement("span", {
    onClick: () => setMenu(!menu),
    className: "dmo-tap",
    style: {
      marginLeft: 'auto',
      fontFamily: t.f.m,
      fontSize: 11,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: menu ? t.accent : t.inkMute
    }
  }, menu ? 'Bezár' : 'Menü'), /*#__PURE__*/React.createElement(DemoBtn, {
    t: t,
    style: {
      marginLeft: dev === 'mobile' ? 0 : 0,
      padding: '10px 16px',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.06em',
      textTransform: 'uppercase'
    }
  }, "Felm\xE9r\xE9s")), dev === 'mobile' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: menu ? '1fr' : '0fr',
      overflow: 'hidden',
      transition: 'grid-template-rows .38s cubic-bezier(.2,.8,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      paddingTop: menu ? 14 : 0,
      transition: 'padding .38s'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    className: "dmo-row",
    style: {
      fontFamily: t.f.d,
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: t.ink,
      padding: '12px 4px',
      borderTop: '1px solid ' + t.lineSoft
    }
  }, l))))), v === 'poster' ? /*#__PURE__*/React.createElement(TrainerSection, {
    t: t,
    dev: dev,
    style: {
      paddingTop: dpick(dev, 56, 84, 120),
      paddingBottom: dpick(dev, 40, 52, 72),
      background: 'linear-gradient(180deg,' + t.bg + ' 0%,' + tint(t.accent, 7) + ' 100%)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    t: t
  }, "Szem\xE9lyi edz\xE9s \xB7 saj\xE1t terem"), /*#__PURE__*/React.createElement(TrainerH, {
    t: t,
    dev: dev,
    size: 104,
    style: {
      maxWidth: 1000
    }
  }, "Amit nem hagysz abba h\xE1rom h\xE9t ut\xE1n."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: t.inkMute,
      fontSize: dpick(dev, 15, 17, 19),
      maxWidth: 560,
      margin: 0
    }
  }, "Felm\xE9r\xE9sre \xE9p\xEDtett terv, heti k\xE9t alkalom. Kezd\u0151knek, visszat\xE9r\u0151knek \xE9s s\xE9r\xFCl\xE9s ut\xE1ni \xFAjrakezd\xE9shez."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(DemoBtn, {
    t: t,
    style: {
      fontWeight: 600,
      letterSpacing: '.04em',
      textTransform: 'uppercase'
    }
  }, "Ingyenes felm\xE9r\xE9s"), /*#__PURE__*/React.createElement(DemoBtn, {
    t: t,
    variant: "outline",
    style: {
      fontWeight: 600,
      letterSpacing: '.04em',
      textTransform: 'uppercase'
    }
  }, "Programok"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: dpick(dev, 36, 48, 64)
    }
  }, statBar(true))) : v === 'split' ? /*#__PURE__*/React.createElement(TrainerSection, {
    t: t,
    dev: dev,
    style: {
      paddingBottom: dpick(dev, 40, 52, 64)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: dpick(dev, '1fr', '1fr', '1.1fr .9fr'),
      gap: dpick(dev, 32, 40, 56),
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    t: t
  }, "Szem\xE9lyi edz\xE9s \xB7 saj\xE1t terem"), /*#__PURE__*/React.createElement(TrainerH, {
    t: t,
    dev: dev,
    size: 66
  }, "Amit nem hagysz abba h\xE1rom h\xE9t ut\xE1n."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: t.inkMute,
      fontSize: dpick(dev, 15, 17, 18),
      maxWidth: 480,
      margin: 0
    }
  }, "Felm\xE9r\xE9sre \xE9p\xEDtett terv, heti k\xE9t alkalom. Kezd\u0151knek, visszat\xE9r\u0151knek \xE9s s\xE9r\xFCl\xE9s ut\xE1ni \xFAjrakezd\xE9shez."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(DemoBtn, {
    t: t,
    style: {
      fontWeight: 600,
      letterSpacing: '.04em',
      textTransform: 'uppercase'
    }
  }, "Ingyenes felm\xE9r\xE9s"), /*#__PURE__*/React.createElement(DemoBtn, {
    t: t,
    variant: "outline",
    style: {
      fontWeight: 600,
      letterSpacing: '.04em',
      textTransform: 'uppercase'
    }
  }, "Programok"))), /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    delay: 140,
    from: "right"
  }, statBar(false)))) : /*#__PURE__*/React.createElement(TrainerSection, {
    t: t,
    dev: dev,
    style: {
      paddingBottom: dpick(dev, 40, 52, 64)
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26,
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    t: t
  }, "Szem\xE9lyi edz\xE9s \xB7 saj\xE1t terem"), /*#__PURE__*/React.createElement(TrainerH, {
    t: t,
    dev: dev,
    size: 78
  }, "Amit nem hagysz abba h\xE1rom h\xE9t ut\xE1n."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: t.inkMute,
      fontSize: dpick(dev, 15, 17, 18),
      maxWidth: 520,
      margin: 0
    }
  }, "Felm\xE9r\xE9sre \xE9p\xEDtett terv, heti k\xE9t alkalom. Kezd\u0151knek, visszat\xE9r\u0151knek \xE9s s\xE9r\xFCl\xE9s ut\xE1ni \xFAjrakezd\xE9shez."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(DemoBtn, {
    t: t,
    style: {
      fontWeight: 600,
      letterSpacing: '.04em',
      textTransform: 'uppercase'
    }
  }, "Ingyenes felm\xE9r\xE9s"), /*#__PURE__*/React.createElement(DemoBtn, {
    t: t,
    variant: "outline",
    style: {
      fontWeight: 600,
      letterSpacing: '.04em',
      textTransform: 'uppercase'
    }
  }, "Programok"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: dpick(dev, 36, 48, 64)
    }
  }, statBar(false))), /*#__PURE__*/React.createElement(TrainerSection, {
    t: t,
    dev: dev,
    alt: true
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    t: t
  }, "Programok"), /*#__PURE__*/React.createElement(TrainerH, {
    t: t,
    dev: dev,
    size: 44
  }, "H\xE1rom \xFAt, ugyanaz a m\xF3dszer.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: v === 'poster' ? dpick(dev, '1fr', '1fr', '1fr') : cols,
      gap: dpick(dev, 16, 18, 24)
    }
  }, TRAINER_PROGRAMS.map((p, i) => {
    const on = prog === i;
    return /*#__PURE__*/React.createElement(Reveal, {
      key: p.n,
      motion: motion,
      delay: i * 110,
      onClick: () => setProg(i),
      className: "dmo-lift dmo-tap",
      style: {
        background: on ? tint(t.accent, 9) : t.card,
        border: '1px solid ' + (on ? t.accent : t.line),
        borderRadius: t.radius,
        padding: dpick(dev, 22, 24, 30),
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, ico && /*#__PURE__*/React.createElement(Gly, {
      name: p.ic,
      size: 19,
      color: on ? t.accent : t.inkMute
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: t.f.d,
        fontWeight: 800,
        fontSize: 24,
        letterSpacing: '-.02em',
        textTransform: 'uppercase',
        color: on ? t.accent : t.ink,
        transition: 'color .25s'
      }
    }, p.n)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: t.f.m,
        fontSize: 11,
        color: t.accent,
        letterSpacing: '.08em'
      }
    }, p.d)), /*#__PURE__*/React.createElement("p", {
      style: {
        color: t.inkMute,
        fontSize: 14,
        margin: 0
      }
    }, p.b), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: on ? '1fr' : '0fr',
        overflow: 'hidden',
        transition: 'grid-template-rows .4s cubic-bezier(.2,.8,.2,1)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: on ? '4px 0 8px' : 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        transition: 'padding .4s'
      }
    }, p.more.map(m => /*#__PURE__*/React.createElement("li", {
      key: m,
      style: {
        display: 'flex',
        gap: 10,
        fontSize: 13,
        color: t.ink
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 1,
        background: t.accent,
        flex: '0 0 auto',
        marginTop: 9
      }
    }), m))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginTop: 'auto',
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    }, p.tags.map(g => /*#__PURE__*/React.createElement("span", {
      key: g,
      style: {
        fontFamily: t.f.m,
        fontSize: 10,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: t.inkMute,
        border: '1px solid ' + t.line,
        borderRadius: 99,
        padding: '4px 10px'
      }
    }, g)), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontFamily: t.f.m,
        fontSize: 10,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: t.accent
      }
    }, on ? '−' : '+')));
  }))), /*#__PURE__*/React.createElement(TrainerSection, {
    t: t,
    dev: dev
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: dpick(dev, '1fr', '1fr', '.42fr 1fr'),
      gap: dpick(dev, 26, 32, 56),
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    t: t
  }, "Hogyan zajlik"), /*#__PURE__*/React.createElement(TrainerH, {
    t: t,
    dev: dev,
    size: 38
  }, "H\xE1rom l\xE9p\xE9s.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['01', 'Felmérés', 'Mozgásvizsgálat és egy beszélgetés arról, mit szeretnél elérni. Ez ingyenes és nem kötelez semmire.', 'clipboard-list'], ['02', 'Terv', 'Kapsz egy 12 hetes vázlatot: mit, mikor, milyen terheléssel. Írásban, hogy vissza tudd olvasni.', 'file-text'], ['03', 'Edzés', 'Heti alkalmak, közben rendszeres visszamérés. Ha valami nem működik, menet közben átalakítjuk.', 'dumbbell']].map(([n, h, b, gi], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: n,
    motion: motion,
    delay: i * 120,
    from: "right",
    className: "dmo-row",
    style: {
      display: 'grid',
      gridTemplateColumns: '54px 1fr',
      gap: dpick(dev, 12, 18, 24),
      padding: dpick(dev, '18px 8px', '20px 8px', '24px 8px'),
      borderTop: '1px solid ' + t.line
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: t.f.m,
      fontSize: 12,
      color: t.accent,
      letterSpacing: '.1em'
    }
  }, n, ico && /*#__PURE__*/React.createElement(Gly, {
    name: gi,
    size: 15,
    color: t.accent
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.d,
      fontWeight: 800,
      fontSize: dpick(dev, 19, 21, 23),
      letterSpacing: '-.02em',
      textTransform: 'uppercase',
      color: t.ink
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      color: t.inkMute,
      fontSize: 14,
      margin: 0,
      maxWidth: 560
    }
  }, b))))))), /*#__PURE__*/React.createElement("div", {
    className: "dmo-zoom"
  }, /*#__PURE__*/React.createElement(Art, {
    t: t,
    gfx: gfx,
    ratio: dpick(dev, '4 / 3', '2 / 1', '21 / 9'),
    label: "edz\xE9s k\xF6zben \xB7 terem",
    motif: "rings",
    icon: "dumbbell",
    glyph: 32,
    style: {
      border: 'none',
      borderRadius: 0
    }
  })), /*#__PURE__*/React.createElement(TrainerSection, {
    t: t,
    dev: dev,
    alt: true
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    style: {
      display: 'flex',
      flexDirection: dev === 'mobile' ? 'column' : 'row',
      alignItems: dev === 'mobile' ? 'flex-start' : 'flex-end',
      justifyContent: 'space-between',
      gap: 20,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    t: t
  }, "\xC1rak"), /*#__PURE__*/React.createElement(TrainerH, {
    t: t,
    dev: dev,
    size: 44
  }, "Nincs \xE9ves szerz\u0151d\xE9s.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      background: t.card,
      border: '1px solid ' + t.line,
      borderRadius: 99,
      padding: 3
    }
  }, [['alkalmi', 'Alkalmi'], ['berlet', 'Bérlet']].map(([k, l]) => /*#__PURE__*/React.createElement("span", {
    key: k,
    onClick: () => setPlan(k),
    className: "dmo-tap",
    style: {
      borderRadius: 99,
      padding: '8px 18px',
      fontFamily: t.f.d,
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      background: plan === k ? t.accent : 'transparent',
      color: plan === k ? t.onAccent : t.inkMute
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: cols,
      gap: dpick(dev, 16, 18, 24),
      alignItems: 'stretch'
    }
  }, TRAINER_PRICES[plan].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: plan + p.n,
    className: "dmo-lift",
    style: {
      background: p.hi ? t.accent : t.card,
      border: '1px solid ' + (p.hi ? t.accent : t.line),
      borderRadius: t.radius,
      padding: dpick(dev, 22, 24, 30),
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      animation: motion ? 'dmoIn .45s cubic-bezier(.2,.8,.2,1) both' : 'none',
      animationDelay: i * 70 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.m,
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: p.hi ? t.onAccent : t.inkMute,
      opacity: p.hi ? .7 : 1
    }
  }, p.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.d,
      fontWeight: 800,
      fontSize: dpick(dev, 26, 28, 32),
      letterSpacing: '-.03em',
      color: p.hi ? t.onAccent : t.ink,
      lineHeight: 1
    }
  }, p.p), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      margin: 0,
      color: p.hi ? t.onAccent : t.inkMute,
      opacity: p.hi ? .78 : 1
    }
  }, p.b)))), /*#__PURE__*/React.createElement("style", null, '@keyframes dmoIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}')), /*#__PURE__*/React.createElement(TrainerSection, {
    t: t,
    dev: dev
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: dpick(dev, '1fr', '1fr', '1fr 1fr'),
      gap: dpick(dev, 28, 32, 64),
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: t.f.d,
      fontWeight: 600,
      fontSize: dpick(dev, 22, 26, 30),
      lineHeight: 1.25,
      letterSpacing: '-.02em',
      color: t.ink,
      margin: 0
    }
  }, "\u201ENyolc alkalom ut\xE1n el\u0151sz\xF6r fordult el\u0151, hogy magamt\xF3l mentem be a terembe.\u201D")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 1,
      background: t.line,
      border: '1px solid ' + t.line
    }
  }, [['86%', 'három hónap után is edz', 'trending-up'], ['4,9', 'átlagos értékelés', 'star']].map(([val, l, gi]) => /*#__PURE__*/React.createElement(TrainerStat, {
    key: l,
    t: t,
    dev: dev,
    value: val,
    label: l,
    motion: motion,
    icon: ico ? gi : null
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: t.accent,
      padding: dpick(dev, '40px 20px', '52px 40px', '64px 60px')
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      flexDirection: dev === 'desktop' ? 'row' : 'column',
      alignItems: dev === 'desktop' ? 'center' : 'flex-start',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(TrainerH, {
    t: t,
    dev: dev,
    size: 40,
    style: {
      color: t.onAccent,
      maxWidth: 640
    }
  }, "Az els\u0151 felm\xE9r\xE9s ingyenes."), /*#__PURE__*/React.createElement("span", {
    className: "dmo-btn",
    style: {
      fontFamily: t.f.b,
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      background: t.bg,
      color: t.ink,
      padding: '15px 24px',
      borderRadius: t.radius,
      whiteSpace: 'nowrap'
    }
  }, "Id\u0151pontot k\xE9rek"))), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: t.bg2,
      padding: dpick(dev, '28px 20px', '32px 40px', '36px 60px'),
      borderTop: '1px solid ' + t.lineSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 20,
      justifyContent: 'space-between',
      fontFamily: t.f.m,
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: t.inkMute
    }
  }, [['+36 30 123 4567', 'phone'], ['edzes@example.hu', 'mail'], ['Budapest · saját terem', 'map-pin']].map(([txt, gi]) => /*#__PURE__*/React.createElement("span", {
    key: txt,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, ico && /*#__PURE__*/React.createElement(Gly, {
    name: gi,
    size: 13,
    color: t.accent
  }), txt)))));
}
Object.assign(window, {
  TrainerPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/demo-edzo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/demo-kit.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Demó — shared theme data + primitives for the three example landing pages. */

const DEMO_THEMES = [{
  id: 'szalon',
  rail: 'Fodrászat & kozmetika',
  note: 'Meleg, képvezérelt, hosszú oldal',
  fonts: {
    d: "'Cormorant Garamond', Georgia, serif",
    b: "'Jost', system-ui, sans-serif",
    m: "'IBM Plex Mono', ui-monospace, monospace"
  },
  base: {
    dark: false,
    bg: '#faf6f0',
    bg2: '#f1e9dd',
    ink: '#2b2320',
    inkMute: '#6f635a',
    line: 'rgba(43,35,32,.15)',
    lineSoft: 'rgba(43,35,32,.08)',
    card: '#ffffff',
    onAccent: '#ffffff',
    stripeA: 'rgba(43,35,32,.09)',
    stripeB: 'rgba(43,35,32,.02)',
    radius: '2px'
  },
  moods: [{
    dot: '#c0596f',
    accent: '#c0596f'
  }, {
    dot: '#b5643c',
    accent: '#b5643c'
  }, {
    dot: '#6f7d5f',
    accent: '#6f7d5f'
  }],
  layouts: [{
    id: 'split',
    label: 'Osztott',
    note: 'Szöveg balra, portré jobbra'
  }, {
    id: 'center',
    label: 'Középre zárt',
    note: 'Középen a szöveg, alatta széles fotó'
  }, {
    id: 'magazine',
    label: 'Magazin',
    note: 'Átlapoló cím, eltolt képek'
  }]
}, {
  id: 'edzo',
  rail: 'Személyi edző',
  note: 'Sötét, rövid, kártyás felépítés',
  fonts: {
    d: "'Archivo', system-ui, sans-serif",
    b: "'Work Sans', system-ui, sans-serif",
    m: "'IBM Plex Mono', ui-monospace, monospace"
  },
  base: {
    dark: true,
    bg: '#0e0f11',
    bg2: '#16181b',
    ink: '#f5f6f4',
    inkMute: '#9aa0a3',
    line: 'rgba(255,255,255,.13)',
    lineSoft: 'rgba(255,255,255,.07)',
    card: '#191c1f',
    onAccent: '#0e0f11',
    stripeA: 'rgba(255,255,255,.09)',
    stripeB: 'rgba(255,255,255,.02)',
    radius: '4px'
  },
  moods: [{
    dot: '#c7f04a',
    accent: '#c7f04a'
  }, {
    dot: '#ff6a2b',
    accent: '#ff6a2b'
  }, {
    dot: '#4ad2ff',
    accent: '#4ad2ff'
  }],
  layouts: [{
    id: 'left',
    label: 'Balra zárt',
    note: 'Cím balra, számsáv alatta'
  }, {
    id: 'poster',
    label: 'Poszter',
    note: 'Egész képernyős cím, nagy számok'
  }, {
    id: 'split',
    label: 'Kettéosztott',
    note: 'Cím és számok egymás mellett'
  }]
}, {
  id: 'asztalos',
  rail: 'Asztalos / kivitelező',
  note: 'Minimál, szöveges, kevés fotó',
  fonts: {
    d: "'Work Sans', system-ui, sans-serif",
    b: "'Work Sans', system-ui, sans-serif",
    m: "'IBM Plex Mono', ui-monospace, monospace"
  },
  base: {
    dark: false,
    bg: '#f7f2e9',
    bg2: '#ece2d1',
    ink: '#221c14',
    inkMute: '#6d6353',
    line: 'rgba(34,28,20,.18)',
    lineSoft: 'rgba(34,28,20,.09)',
    card: '#fffdf7',
    onAccent: '#ffffff',
    stripeA: 'rgba(34,28,20,.1)',
    stripeB: 'rgba(34,28,20,.02)',
    radius: '0px'
  },
  moods: [{
    dot: '#a8762a',
    accent: '#a8762a'
  }, {
    dot: '#3a5a48',
    accent: '#3a5a48'
  }, {
    dot: '#46587a',
    accent: '#46587a'
  }],
  layouts: [{
    id: 'list',
    label: 'Listás',
    note: 'Szöveges nyitás, sorokba szedve'
  }, {
    id: 'index',
    label: 'Indexes',
    note: 'Bal oldali tartalomjegyzék'
  }, {
    id: 'wide',
    label: 'Széles',
    note: 'Teljes szélességű nyitókép'
  }]
}];
const DEMO_DEVICES = [{
  key: 'mobile',
  label: 'Mobil',
  w: 390,
  h: 844
}, {
  key: 'tablet',
  label: 'Tablet',
  w: 834,
  h: 1112
}, {
  key: 'desktop',
  label: 'Desktop',
  w: 1440,
  h: 900
}];
function resolveDemo(theme, moodIdx) {
  const m = theme.moods[moodIdx % theme.moods.length];
  return {
    ...theme.base,
    ...m,
    f: theme.fonts,
    id: theme.id
  };
}

/* device-conditional value */
function dpick(dev, m, t, d) {
  return dev === 'mobile' ? m : dev === 'tablet' ? t : d;
}
function mix(c, other, pct) {
  return 'color-mix(in srgb, ' + c + ' ' + pct + '%, ' + other + ')';
}
function tint(c, pct) {
  return 'color-mix(in srgb, ' + c + ' ' + pct + '%, transparent)';
}

/* ---- interakció + mozgás ---------------------------------------------- */

/* Belép-e a nézetbe: a keret (.demoframe) a scroll root. */
function useInView(ref, motion = true) {
  const [on, setOn] = React.useState(!motion);
  React.useEffect(() => {
    if (!motion) {
      setOn(true);
      return;
    }
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setOn(true);
      return;
    }
    setOn(false);
    const root = el.closest ? el.closest('.demoframe') : null;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, {
      root,
      rootMargin: '0px 0px -6% 0px',
      threshold: 0.04
    });
    io.observe(el);
    return () => io.disconnect();
  }, [motion]);
  return on;
}
function Reveal({
  motion = true,
  delay = 0,
  from = 'up',
  children,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const on = useInView(ref, motion);
  const off = from === 'left' ? 'translateX(-22px)' : from === 'right' ? 'translateX(22px)' : from === 'scale' ? 'scale(.97)' : 'translateY(20px)';
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    style: {
      opacity: on ? 1 : 0,
      transform: on ? 'none' : off,
      transition: 'opacity .75s cubic-bezier(.2,.8,.2,1) ' + delay + 'ms, transform .75s cubic-bezier(.2,.8,.2,1) ' + delay + 'ms',
      ...style
    }
  }, rest), children);
}

/* Számláló, ami a belépéskor indul. */
function useCount(to, run, ms = 1000) {
  const [v, setV] = React.useState(run ? to : 0);
  React.useEffect(() => {
    if (!run) {
      setV(0);
      return;
    }
    let raf,
      st = null;
    const step = ts => {
      if (st === null) st = ts;
      const p = Math.min(1, (ts - st) / ms);
      setV(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, run, ms]);
  return v;
}

/* Egyetlen stíluslap a hover/mozgás állapotokhoz — a színek a gyökér CSS-változóiból jönnek. */
function DemoStyle() {
  return /*#__PURE__*/React.createElement("style", null, '.dmo{--dmo-e:cubic-bezier(.2,.8,.2,1)}' + '.dmo-lift{transition:transform .32s var(--dmo-e),border-color .32s,box-shadow .32s}' + '.dmo-lift:hover{transform:translateY(-5px);border-color:var(--dacc);box-shadow:0 12px 30px var(--dshadow)}' + '.dmo-row{transition:background .24s,color .24s}' + '.dmo-row:hover{background:var(--dsoft)}' + '.dmo-link{position:relative;cursor:pointer;transition:color .2s}' + '.dmo-link:hover{color:var(--dacc)}' + '.dmo-link:after{content:"";position:absolute;left:0;bottom:-5px;height:1px;width:100%;background:var(--dacc);transform:scaleX(0);transform-origin:left;transition:transform .3s var(--dmo-e)}' + '.dmo-link:hover:after{transform:scaleX(1)}' + '.dmo-btn{cursor:pointer;transition:transform .22s var(--dmo-e),filter .22s}' + '.dmo-btn:hover{transform:translateY(-2px);filter:brightness(1.07)}' + '.dmo-btn:active{transform:translateY(0)}' + '.dmo-zoom{overflow:hidden}' + '.dmo-zoom>*{transition:transform .9s var(--dmo-e)}' + '.dmo-zoom:hover>*{transform:scale(1.05)}' + '.dmo-tap{cursor:pointer;transition:opacity .25s,border-color .25s,background .25s}' + '.dmo-tap:hover{opacity:.88}' + '.dmo-fold{overflow:hidden;transition:grid-template-rows .42s var(--dmo-e),opacity .32s}' + '.dmo-field{transition:border-color .22s,box-shadow .22s}' + '.dmo-field:hover,.dmo-field:focus-within{border-color:var(--dacc);box-shadow:0 0 0 3px var(--dhalo)}');
}

/* Gyökér változók, hogy a fenti szabályok témát kapjanak. */
function demoVars(t) {
  return {
    '--dacc': t.accent,
    '--dsoft': tint(t.ink, 4),
    '--dhalo': tint(t.accent, 16),
    '--dshadow': t.dark ? 'rgba(0,0,0,.5)' : 'rgba(43,35,32,.12)'
  };
}

/* Striped image placeholder with a mono caption for what belongs there. */
function Stripes({
  label,
  ratio = '4 / 3',
  t,
  style,
  className,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    onClick: onClick,
    style: {
      aspectRatio: ratio,
      background: 'repeating-linear-gradient(135deg,' + t.stripeA + ' 0 5px,' + t.stripeB + ' 5px 11px)',
      border: '1px solid ' + t.line,
      borderRadius: t.radius,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.m,
      fontSize: 10,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: t.inkMute,
      background: t.bg,
      padding: '5px 9px',
      border: '1px solid ' + t.line,
      textAlign: 'center',
      lineHeight: 1.4
    }
  }, label));
}

/* ---- grafika: ikonok és illusztrációk --------------------------------- */

const DEMO_GFX = [{
  key: 'foto',
  label: 'Fotóhely',
  note: 'Csak jelölt képhelyek, ikonok nélkül'
}, {
  key: 'ikon',
  label: 'Ikonok',
  note: 'Képhelyek és szakmához illő ikonok'
}, {
  key: 'illu',
  label: 'Illusztráció',
  note: 'A képek helyén geometrikus illusztráció'
}];
const LUCIDE = 'https://unpkg.com/lucide-static@0.544.0/icons/';

/* Lucide glyph currentColor-maszkként — ugyanaz a mechanizmus, mint a rendszer Icon eleme. */
function Gly({
  name,
  size = 18,
  color,
  style
}) {
  const u = 'url(' + LUCIDE + name + '.svg)';
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      backgroundColor: color || 'currentColor',
      WebkitMaskImage: u,
      maskImage: u,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      verticalAlign: 'middle',
      ...style
    }
  });
}

/* Hajszálvonalas keret egy glyph körül — kártyák és sorok élén. */
function IconMark({
  t,
  name,
  size = 17,
  box = 38,
  round,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: box,
      height: box,
      flex: '0 0 auto',
      borderRadius: round ? 99 : t.radius,
      background: tint(t.accent, 10),
      border: '1px solid ' + tint(t.accent, 26),
      ...style
    }
  }, /*#__PURE__*/React.createElement(Gly, {
    name: name,
    size: size,
    color: t.accent
  }));
}

/* Illusztráció a fotóhelyek helyett — csak kör, téglalap és vonal, a téma színeiből. */
function Illu({
  t,
  motif = 'arcs',
  icon,
  ratio = '4 / 3',
  glyph = 26,
  style,
  className,
  onClick
}) {
  const A = o => tint(t.accent, o),
    I = o => tint(t.ink, o),
    P = s => ({
      position: 'absolute',
      ...s
    });
  const M = {
    arcs: [P({
      top: '-16%',
      left: '4%',
      width: '56%',
      aspectRatio: '1',
      borderRadius: '50%',
      border: '1px solid ' + I(16)
    }), P({
      bottom: '-24%',
      right: '-8%',
      width: '68%',
      aspectRatio: '1',
      borderRadius: '50%',
      background: A(11)
    }), P({
      top: '28%',
      right: '13%',
      width: '22%',
      aspectRatio: '1',
      borderRadius: '50%',
      border: '1px solid ' + A(55)
    }), P({
      left: 0,
      right: 0,
      top: '58%',
      height: 1,
      background: I(9)
    })],
    bloom: [P({
      top: '20%',
      left: '5%',
      width: '44%',
      aspectRatio: '1',
      borderRadius: '50%',
      background: A(13)
    }), P({
      top: '32%',
      left: '28%',
      width: '44%',
      aspectRatio: '1',
      borderRadius: '50%',
      border: '1px solid ' + A(45)
    }), P({
      top: '10%',
      right: '3%',
      width: '34%',
      aspectRatio: '1',
      borderRadius: '50%',
      background: I(6)
    })],
    bars: [P({
      left: 0,
      right: 0,
      bottom: '13%',
      height: 1,
      background: I(14)
    }), P({
      left: '9%',
      bottom: '13%',
      width: '10%',
      height: '30%',
      background: I(12)
    }), P({
      left: '26%',
      bottom: '13%',
      width: '10%',
      height: '52%',
      background: I(12)
    }), P({
      left: '43%',
      bottom: '13%',
      width: '10%',
      height: '74%',
      background: A(72)
    }), P({
      left: '60%',
      bottom: '13%',
      width: '10%',
      height: '44%',
      background: I(12)
    }), P({
      left: '77%',
      bottom: '13%',
      width: '10%',
      height: '62%',
      background: I(12)
    })],
    rings: [P({
      top: '50%',
      left: '50%',
      width: '82%',
      aspectRatio: '1',
      borderRadius: '50%',
      border: '1px solid ' + I(12),
      transform: 'translate(-50%,-50%)'
    }), P({
      top: '50%',
      left: '50%',
      width: '58%',
      aspectRatio: '1',
      borderRadius: '50%',
      border: '1px solid ' + A(42),
      transform: 'translate(-50%,-50%)'
    }), P({
      top: '50%',
      left: '50%',
      width: '32%',
      aspectRatio: '1',
      borderRadius: '50%',
      background: A(14),
      transform: 'translate(-50%,-50%)'
    })],
    plan: [P({
      inset: '13%',
      border: '1px solid ' + I(20)
    }), P({
      inset: '25%',
      border: '1px solid ' + A(45)
    }), P({
      left: '13%',
      right: '13%',
      top: '50%',
      height: 1,
      background: I(11)
    }), P({
      top: '13%',
      bottom: '13%',
      left: '50%',
      width: 1,
      background: I(11)
    }), P({
      left: '13%',
      right: '13%',
      top: '7%',
      height: 1,
      background: A(50)
    })],
    grain: Array.from({
      length: 7
    }, (_, i) => P({
      left: '7%',
      right: '7%',
      top: 13 + i * 11 + '%',
      height: 1,
      background: i % 3 === 0 ? A(40) : I(11)
    })),
    grid: [P({
      top: 0,
      bottom: 0,
      left: '25%',
      width: 1,
      background: I(10)
    }), P({
      top: 0,
      bottom: 0,
      left: '50%',
      width: 1,
      background: I(10)
    }), P({
      top: 0,
      bottom: 0,
      left: '75%',
      width: 1,
      background: I(10)
    }), P({
      left: 0,
      right: 0,
      top: '33%',
      height: 1,
      background: I(10)
    }), P({
      left: 0,
      right: 0,
      top: '66%',
      height: 1,
      background: I(10)
    }), P({
      left: '50%',
      top: '33%',
      width: '25%',
      height: '33%',
      background: A(15)
    })]
  };
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    onClick: onClick,
    style: {
      position: 'relative',
      aspectRatio: ratio,
      background: t.card,
      border: '1px solid ' + t.line,
      borderRadius: t.radius,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, (M[motif] || M.arcs).map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: s
  })), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: glyph * 2,
      height: glyph * 2,
      borderRadius: 99,
      background: mix(t.bg, 'transparent', 84),
      border: '1px solid ' + tint(t.accent, 30)
    }
  }, /*#__PURE__*/React.createElement(Gly, {
    name: icon,
    size: glyph,
    color: t.accent
  })));
}

/* Egy képhely: jelölt fotóhely vagy illusztráció, a grafika-váltó szerint. */
function Art({
  t,
  gfx = 'foto',
  label,
  motif,
  icon,
  ratio,
  glyph,
  style,
  className,
  onClick
}) {
  return gfx === 'illu' ? /*#__PURE__*/React.createElement(Illu, {
    t: t,
    motif: motif,
    icon: icon,
    ratio: ratio,
    glyph: glyph,
    style: style,
    className: className,
    onClick: onClick
  }) : /*#__PURE__*/React.createElement(Stripes, {
    t: t,
    label: label,
    ratio: ratio,
    style: style,
    className: className,
    onClick: onClick
  });
}

/* Mono kicker used above headlines in all three demos. */
function Kicker({
  t,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.m,
      fontSize: 11,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: t.accent,
      ...style
    }
  }, children);
}
function DemoBtn({
  t,
  children,
  variant = 'solid',
  wide,
  style,
  className = 'dmo-btn',
  onClick
}) {
  const base = {
    fontFamily: t.f.b,
    fontSize: 14,
    fontWeight: 500,
    padding: '13px 22px',
    borderRadius: t.radius,
    cursor: 'pointer',
    border: '1px solid transparent',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: wide ? '100%' : undefined,
    whiteSpace: 'nowrap'
  };
  const v = variant === 'solid' ? {
    background: t.accent,
    color: t.onAccent
  } : variant === 'outline' ? {
    background: 'transparent',
    color: t.ink,
    borderColor: t.line
  } : {
    background: 'transparent',
    color: t.accent,
    padding: '13px 0'
  };
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    onClick: onClick,
    style: {
      ...base,
      ...v,
      ...style
    }
  }, children);
}
Object.assign(window, {
  DEMO_THEMES,
  DEMO_DEVICES,
  DEMO_GFX,
  resolveDemo,
  dpick,
  mix,
  tint,
  Stripes,
  Illu,
  Art,
  Gly,
  IconMark,
  Kicker,
  DemoBtn,
  Reveal,
  useInView,
  useCount,
  DemoStyle,
  demoVars
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/demo-kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/demo-szalon.jsx
try { (() => {
/* Demó — fodrászat & kozmetika. Meleg, szerif, képvezérelt, hosszú oldal. */

function SalonSection({
  t,
  dev,
  alt,
  flush,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: alt ? t.bg2 : t.bg,
      padding: dpick(dev, '52px 0', '72px 0', '104px 0'),
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: flush ? 0 : '0 ' + dpick(dev, '20px', '40px', '64px')
    }
  }, children));
}
function SalonH({
  t,
  dev,
  size,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: t.f.d,
      fontWeight: 500,
      fontSize: dpick(dev, size * 0.68, size * 0.84, size),
      lineHeight: 1.08,
      letterSpacing: '-.01em',
      color: t.ink,
      textWrap: 'pretty',
      ...style
    }
  }, children);
}
const SALON_SERVICES = [{
  n: 'Vágás és formázás',
  d: '60 perc',
  p: '8 000 Ft-tól',
  img: 'vágás közben · közeli',
  ic: 'scissors',
  mo: 'arcs'
}, {
  n: 'Festés és melír',
  d: '120 perc',
  p: '16 000 Ft-tól',
  img: 'festés · előtte-utána',
  ic: 'paintbrush',
  mo: 'bloom'
}, {
  n: 'Arckezelés',
  d: '75 perc',
  p: '12 000 Ft-tól',
  img: 'kozmetikai kezelés',
  ic: 'sparkles',
  mo: 'grid'
}];
const SALON_PRICES = [['Női vágás, mosás, szárítás', '8 000 – 11 000 Ft'], ['Férfi vágás', '6 000 Ft'], ['Tőfestés', '12 000 Ft-tól'], ['Melír, fóliás', '18 000 Ft-tól'], ['Alap arckezelés', '12 000 Ft'], ['Szemöldökformázás', '3 500 Ft']];
const SALON_GALLERY = [{
  l: 'hajfestés · részlet',
  m: 'bloom',
  i: 'paintbrush'
}, {
  l: 'szalonbelső · szék',
  m: 'grid',
  i: 'armchair'
}, {
  l: 'termékpolc',
  m: 'grid',
  i: 'package'
}, {
  l: 'mosdótér · tükör',
  m: 'arcs',
  i: 'droplets'
}];
const SALON_ABOUT = [['Konzultáció minden új vendégnek', 'message-circle'], ['Illatmentes termékek kérésre', 'leaf'], ['Kártyás fizetés', 'credit-card']];
function SalonPage({
  t,
  dev,
  v = 'split',
  motion = true,
  gfx = 'foto'
}) {
  const ico = gfx !== 'foto';
  const links = ['Szolgáltatások', 'Árak', 'A szalonról', 'Kapcsolat'];
  const cols = dpick(dev, '1fr', 'repeat(3,1fr)', 'repeat(3,1fr)');
  const [menu, setMenu] = React.useState(false);
  const [gal, setGal] = React.useState(0);
  const wide = dev === 'desktop';
  const heroText = align => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'left'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    t: t
  }, "Belv\xE1ros \xB7 h\xE9tf\u0151\u2013szombat"), /*#__PURE__*/React.createElement(SalonH, {
    t: t,
    dev: dev,
    size: align === 'center' ? 66 : 62,
    style: {
      margin: 0
    }
  }, "\xC1polt haj,", /*#__PURE__*/React.createElement("br", null), "nyugodt m\xE1sf\xE9l \xF3ra."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: t.inkMute,
      fontSize: dpick(dev, 15, 16, 17),
      maxWidth: 440,
      margin: 0
    }
  }, "V\xE1g\xE1s, fest\xE9s \xE9s arckezel\xE9s egy helyen. El\u0151re egyeztetett id\u0151pontban, siet\xE9s n\xE9lk\xFCl."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: align === 'center' ? 'center' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(DemoBtn, {
    t: t
  }, "Id\u0151pontot k\xE9rek"), /*#__PURE__*/React.createElement(DemoBtn, {
    t: t,
    variant: "ghost"
  }, "\xC1rak megtekint\xE9se")));
  return /*#__PURE__*/React.createElement("div", {
    className: "dmo",
    style: {
      background: t.bg,
      color: t.ink,
      fontFamily: t.f.b,
      fontSize: 15,
      lineHeight: 1.65,
      minHeight: '100%',
      ...demoVars(t)
    }
  }, /*#__PURE__*/React.createElement(DemoStyle, null), /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: '1px solid ' + t.lineSoft,
      background: t.bg,
      padding: dpick(dev, '16px 20px', '20px 40px', '24px 64px')
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      display: 'flex',
      flexDirection: dev === 'mobile' ? 'row' : 'column',
      alignItems: 'center',
      gap: dev === 'mobile' ? 0 : 14,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.d,
      fontSize: dpick(dev, 19, 22, 25),
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: t.ink
    }
  }, "Fodr\xE1szat & Kozmetika"), dev === 'mobile' ? /*#__PURE__*/React.createElement("span", {
    onClick: () => setMenu(!menu),
    className: "dmo-tap",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      padding: 4
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 20,
      height: 1.5,
      background: menu ? t.accent : t.ink,
      transition: 'transform .3s cubic-bezier(.2,.8,.2,1), opacity .2s',
      transform: menu ? i === 0 ? 'translateY(5.5px) rotate(45deg)' : i === 2 ? 'translateY(-5.5px) rotate(-45deg)' : 'none' : 'none',
      opacity: menu && i === 1 ? 0 : 1
    }
  }))) : /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 30,
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    className: "dmo-link",
    style: {
      fontSize: 13,
      letterSpacing: '.06em',
      color: t.inkMute
    }
  }, l)), /*#__PURE__*/React.createElement(DemoBtn, {
    t: t,
    style: {
      padding: '9px 18px',
      fontSize: 13
    }
  }, "Id\u0151pont"))), dev === 'mobile' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: menu ? '1fr' : '0fr',
      overflow: 'hidden',
      transition: 'grid-template-rows .38s cubic-bezier(.2,.8,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      paddingTop: menu ? 16 : 0,
      transition: 'padding .38s'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    className: "dmo-row",
    style: {
      fontSize: 15,
      color: t.ink,
      padding: '11px 4px',
      borderTop: '1px solid ' + t.lineSoft
    }
  }, l)), /*#__PURE__*/React.createElement(DemoBtn, {
    t: t,
    wide: true,
    style: {
      marginTop: 10
    }
  }, "Id\u0151pontot k\xE9rek")))), v === 'center' ? /*#__PURE__*/React.createElement(SalonSection, {
    t: t,
    dev: dev,
    style: {
      paddingBottom: dpick(dev, 36, 44, 56)
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, heroText('center'))) : v === 'magazine' ? /*#__PURE__*/React.createElement(SalonSection, {
    t: t,
    dev: dev,
    style: {
      paddingBottom: dpick(dev, 44, 56, 72)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: dpick(dev, '1fr', '1fr', '.9fr 1.1fr'),
      gap: dpick(dev, 28, 36, 0),
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    from: "scale",
    className: "dmo-zoom",
    style: {
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Art, {
    t: t,
    gfx: gfx,
    ratio: dev === 'mobile' ? '4 / 3' : '3 / 4',
    label: "portr\xE9 \xB7 szalonbels\u0151",
    motif: "arcs",
    icon: "scissors",
    glyph: 30
  })), /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    delay: 140,
    from: "right",
    style: {
      background: t.bg,
      padding: wide ? '52px 0 52px 52px' : 0,
      marginLeft: wide ? -64 : 0,
      zIndex: 2,
      position: 'relative'
    }
  }, heroText('left')))) : /*#__PURE__*/React.createElement(SalonSection, {
    t: t,
    dev: dev
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: dpick(dev, '1fr', '1fr', '1.02fr .98fr'),
      gap: dpick(dev, 32, 40, 64),
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion
  }, heroText('left')), /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    delay: 140,
    from: "scale",
    className: "dmo-zoom"
  }, /*#__PURE__*/React.createElement(Art, {
    t: t,
    gfx: gfx,
    ratio: dev === 'mobile' ? '4 / 3' : '4 / 5',
    label: "portr\xE9 \xB7 szalonbels\u0151",
    motif: "arcs",
    icon: "scissors",
    glyph: 30
  })))), v === 'center' && /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    from: "scale",
    className: "dmo-zoom",
    style: {
      padding: '0 0 ' + dpick(dev, 8, 12, 16)
    }
  }, /*#__PURE__*/React.createElement(Art, {
    t: t,
    gfx: gfx,
    ratio: dpick(dev, '4 / 3', '2 / 1', '21 / 8'),
    label: "portr\xE9 \xB7 szalonbels\u0151",
    motif: "bloom",
    icon: "scissors",
    glyph: 30,
    style: {
      border: 'none',
      borderRadius: 0
    }
  })), /*#__PURE__*/React.createElement(SalonSection, {
    t: t,
    dev: dev,
    alt: true
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    t: t
  }, "Szolg\xE1ltat\xE1sok"), /*#__PURE__*/React.createElement(SalonH, {
    t: t,
    dev: dev,
    size: 40,
    style: {
      margin: 0
    }
  }, "Ami\xE9rt a legt\xF6bben j\xF6nnek.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: v === 'magazine' ? dpick(dev, '1fr', 'repeat(3,1fr)', 'repeat(3,1fr)') : cols,
      gap: dpick(dev, 26, 24, 34)
    }
  }, SALON_SERVICES.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.n,
    motion: motion,
    delay: i * 110,
    className: "dmo-lift",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      background: t.card,
      border: '1px solid ' + t.lineSoft,
      borderRadius: t.radius,
      padding: 14,
      marginTop: v === 'magazine' && wide ? i * 26 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dmo-zoom"
  }, /*#__PURE__*/React.createElement(Art, {
    t: t,
    gfx: gfx,
    ratio: "4 / 3",
    label: s.img,
    motif: s.mo,
    icon: s.ic,
    glyph: 24
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, ico && /*#__PURE__*/React.createElement(Gly, {
    name: s.ic,
    size: 19,
    color: t.accent
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.d,
      fontSize: 24,
      color: t.ink
    }
  }, s.n)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.m,
      fontSize: 11,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: t.inkMute
    }
  }, s.d, " \xB7 ", s.p))))), v === 'split' ? /*#__PURE__*/React.createElement(SalonSection, {
    t: t,
    dev: dev,
    flush: true,
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: dpick(dev, '1fr', 'repeat(3,1fr)', 'repeat(3,1fr)'),
      gap: 2
    }
  }, SALON_GALLERY.slice(0, 3).map((g, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: g.l,
    motion: motion,
    delay: i * 120,
    from: "scale",
    className: "dmo-zoom"
  }, /*#__PURE__*/React.createElement(Art, {
    t: t,
    gfx: gfx,
    ratio: dpick(dev, '3 / 2', '3 / 4', '3 / 4'),
    label: g.l,
    motif: g.m,
    icon: g.i,
    glyph: 26,
    style: {
      border: 'none',
      borderRadius: 0
    }
  }))))) : /*#__PURE__*/React.createElement(SalonSection, {
    t: t,
    dev: dev
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dmo-zoom",
    style: {
      border: '1px solid ' + t.line,
      borderRadius: t.radius
    }
  }, /*#__PURE__*/React.createElement(Art, {
    key: gal,
    t: t,
    gfx: gfx,
    ratio: dpick(dev, '4 / 3', '3 / 2', '16 / 9'),
    label: SALON_GALLERY[gal].l,
    motif: SALON_GALLERY[gal].m,
    icon: SALON_GALLERY[gal].i,
    glyph: 30,
    style: {
      border: 'none',
      borderRadius: 0,
      animation: 'none',
      opacity: 1
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: dpick(dev, 6, 10, 12)
    }
  }, SALON_GALLERY.map((g, i) => /*#__PURE__*/React.createElement(Art, {
    key: g.l,
    t: t,
    gfx: gfx,
    ratio: "1 / 1",
    label: dev === 'mobile' ? String(i + 1) : g.l,
    motif: g.m,
    icon: g.i,
    glyph: dev === 'mobile' ? 13 : 17,
    onClick: () => setGal(i),
    className: "dmo-tap",
    style: {
      borderColor: i === gal ? t.accent : t.line,
      borderWidth: i === gal ? 2 : 1,
      opacity: i === gal ? 1 : .62
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.m,
      fontSize: 10,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: t.inkMute
    }
  }, "V\xE1lassz k\xE9pet a gal\xE9ri\xE1b\xF3l"))), /*#__PURE__*/React.createElement(SalonSection, {
    t: t,
    dev: dev
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: dpick(dev, '1fr', '1fr', '.9fr 1.1fr'),
      gap: dpick(dev, 30, 36, 64),
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    from: "left",
    className: "dmo-zoom",
    style: {
      order: v === 'magazine' ? 2 : 1
    }
  }, /*#__PURE__*/React.createElement(Art, {
    t: t,
    gfx: gfx,
    ratio: "1 / 1",
    label: "a szalon \xB7 nappali f\xE9ny",
    motif: "rings",
    icon: "flower",
    glyph: 30
  })), /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    delay: 120,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      order: v === 'magazine' ? 1 : 2
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    t: t
  }, "A szalonr\xF3l"), /*#__PURE__*/React.createElement(SalonH, {
    t: t,
    dev: dev,
    size: 38,
    style: {
      margin: 0
    }
  }, "K\xE9t sz\xE9k, egy vend\xE9g egyszerre."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: t.inkMute,
      margin: 0
    }
  }, "Nem fut\xF3szalag: annyi id\u0151pontot adunk ki egy napra, amennyivel val\xF3ban lehet foglalkozni. Az els\u0151 alkalom mindig konzult\xE1ci\xF3val kezd\u0151dik, hogy a hajad \xE1llapot\xE1hoz ill\u0151 megold\xE1st v\xE1lasszuk."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, SALON_ABOUT.map(([txt, gi]) => /*#__PURE__*/React.createElement("li", {
    key: txt,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'baseline',
      color: t.ink
    }
  }, ico ? /*#__PURE__*/React.createElement(Gly, {
    name: gi,
    size: 15,
    color: t.accent,
    style: {
      transform: 'translateY(2px)'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 1,
      background: t.accent,
      flex: '0 0 auto',
      transform: 'translateY(-4px)'
    }
  }), txt)))))), /*#__PURE__*/React.createElement(SalonSection, {
    t: t,
    dev: dev,
    alt: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: dpick(dev, '1fr', '1fr', '.5fr 1fr'),
      gap: dpick(dev, 28, 32, 56),
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    t: t
  }, "\xC1rak"), /*#__PURE__*/React.createElement(SalonH, {
    t: t,
    dev: dev,
    size: 34,
    style: {
      margin: 0
    }
  }, "T\xE1j\xE9koztat\xF3 \xE1rlista.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, SALON_PRICES.map(([n, p], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: n,
    motion: motion,
    delay: i * 60,
    className: "dmo-row",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 20,
      padding: '15px 8px',
      borderBottom: '1px solid ' + t.lineSoft,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.ink,
      fontSize: dpick(dev, 14, 15, 16)
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.m,
      fontSize: 12,
      color: t.inkMute,
      whiteSpace: 'nowrap'
    }
  }, p))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: t.f.m,
      fontSize: 11,
      color: t.inkMute,
      marginTop: 16,
      letterSpacing: '.04em'
    }
  }, "A v\xE9gleges \xE1r a hajhosszt\xF3l \xE9s a felhaszn\xE1lt anyagt\xF3l f\xFCgg.")))), /*#__PURE__*/React.createElement(SalonSection, {
    t: t,
    dev: dev
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: dpick(dev, '1fr', '1fr 1fr', '1fr 1fr'),
      gap: dpick(dev, 26, 32, 56)
    }
  }, [['Öt éve ide járok, és még soha nem kellett kétszer elmagyaráznom, mit szeretnék.', 'Vendég · festés'], ['Az időpont időpont: nem vártam, és nem is siettettek.', 'Vendég · arckezelés']].map(([q, w], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: w,
    motion: motion,
    delay: i * 140,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      borderTop: '1px solid ' + t.line,
      paddingTop: 22
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: t.f.d,
      fontSize: dpick(dev, 21, 22, 25),
      lineHeight: 1.35,
      color: t.ink,
      margin: 0
    }
  }, "\u201E", q, "\u201D"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: t.f.m,
      fontSize: 11,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: t.inkMute
    }
  }, w))))), /*#__PURE__*/React.createElement(SalonSection, {
    t: t,
    dev: dev,
    style: {
      background: tint(t.accent, 10)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: dpick(dev, '1fr', '1fr', '1fr .8fr'),
      gap: dpick(dev, 28, 32, 56),
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SalonH, {
    t: t,
    dev: dev,
    size: 40,
    style: {
      margin: 0
    }
  }, "K\xE9rj id\u0151pontot."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: t.inkMute,
      margin: 0,
      maxWidth: 420
    }
  }, "\xCDrd meg, mikor lenne j\xF3, \xE9s mit szeretn\xE9l. Aznap visszajelz\xFCnk.")), /*#__PURE__*/React.createElement(Reveal, {
    motion: motion,
    delay: 120,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ['Név', 'Telefonszám'].map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    className: "dmo-field",
    style: {
      background: t.card,
      border: '1px solid ' + t.line,
      borderRadius: t.radius,
      padding: '13px 15px',
      fontSize: 14,
      color: t.inkMute
    }
  }, p)), /*#__PURE__*/React.createElement(DemoBtn, {
    t: t,
    wide: true
  }, "Id\u0151pontot k\xE9rek")))), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: t.bg2,
      borderTop: '1px solid ' + t.line,
      padding: dpick(dev, '32px 20px', '40px', '48px 64px')
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: dpick(dev, '1fr', 'repeat(3,1fr)', 'repeat(3,1fr)'),
      gap: 24
    }
  }, [['Nyitvatartás', 'H–P 9:00–18:00\nSzo 9:00–13:00', 'clock'], ['Cím', 'Belváros, főutca 12.\n1. emelet', 'map-pin'], ['Elérhetőség', '+36 1 234 5678\nidopont@example.hu', 'phone']].map(([h, b, gi]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: t.f.m,
      fontSize: 10,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: t.inkMute
    }
  }, ico && /*#__PURE__*/React.createElement(Gly, {
    name: gi,
    size: 13,
    color: t.accent
  }), h), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: t.ink,
      whiteSpace: 'pre-line',
      lineHeight: 1.6
    }
  }, b))))));
}
Object.assign(window, {
  SalonPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/demo-szalon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/shared.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Eyebrow,
  Icon,
  Card
} = window.PrymaDesignSystem_286b6c;
const railStyle = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--container-pad)'
};

/* --- Beúszó animációk: egy stíluslap + két komponens ---------------------- */
(function () {
  if (document.getElementById('pv-appear')) return;
  const s = document.createElement('style');
  s.id = 'pv-appear';
  let d = '';
  for (let i = 2; i <= 8; i++) d += '.pv-st>*:nth-child(' + i + '){transition-delay:' + (i - 1) * 90 + 'ms}';
  s.textContent = '.pv-e{}' + '.pv-in,.pv-st>*{opacity:0;transform:translateY(22px);transition:opacity .72s cubic-bezier(.2,.8,.2,1),transform .72s cubic-bezier(.2,.8,.2,1)}' + '.pv-in.pv-left{transform:translateX(-26px)}.pv-in.pv-right{transform:translateX(26px)}.pv-in.pv-scale{transform:scale(.975)}' + '.pv-in.pv-on,.pv-st.pv-on>*{opacity:1;transform:none}' + d + '@media (prefers-reduced-motion: reduce){.pv-in,.pv-st>*{opacity:1 !important;transform:none !important;transition:none !important}}';
  document.head.appendChild(s);
})();
function usePvOn(immediate) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    if (immediate) {
      const id = requestAnimationFrame(() => setOn(true));
      return () => cancelAnimationFrame(id);
    }
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.05
    });
    io.observe(el);
    return () => io.disconnect();
  }, [immediate]);
  return [ref, on];
}

/* Egy blokk úszik be. from: up | left | right | scale */
function Appear({
  children,
  from = 'up',
  delay = 0,
  immediate = false,
  style,
  className = '',
  ...rest
}) {
  const [ref, on] = usePvOn(immediate);
  const cls = ['pv-in', from !== 'up' ? 'pv-' + from : '', on ? 'pv-on' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: cls,
    style: delay ? {
      transitionDelay: delay + 'ms',
      ...style
    } : style
  }, rest), children);
}

/* A közvetlen gyerekek egymás után úsznak be — a rács szerkezete marad. */
function AppearGroup({
  children,
  immediate = false,
  style,
  className = '',
  ...rest
}) {
  const [ref, on] = usePvOn(immediate);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ['pv-st', on ? 'pv-on' : '', className].filter(Boolean).join(' '),
    style: style
  }, rest), children);
}
function Container({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...railStyle,
      ...style
    }
  }, children);
}
function Section({
  children,
  tight = false,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: (tight ? 'var(--section-pad-y-tight)' : 'var(--section-pad-y)') + ' 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Container, null, children));
}
function SectionHead({
  eyebrow,
  title,
  lead,
  align = 'left',
  tone = 'violet',
  maxWidth = 720
}) {
  return /*#__PURE__*/React.createElement(Appear, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth,
      margin: align === 'center' ? '0 auto' : undefined
    }
  }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, {
    tone: tone
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--display-xl-size)',
      fontWeight: 'var(--display-xl-weight)',
      lineHeight: 'var(--display-xl-lh)',
      letterSpacing: 'var(--display-xl-ls)',
      color: 'var(--text-hi)',
      textWrap: 'pretty'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-lg-size)',
      lineHeight: 'var(--body-lg-lh)',
      letterSpacing: 'var(--body-lg-ls)',
      color: 'var(--text-mute)',
      textWrap: 'pretty'
    }
  }, lead));
}
function FeatureTile({
  icon,
  title,
  body,
  tone = 'cyan'
}) {
  const c = {
    cyan: 'var(--cyan-400)',
    pink: 'var(--pink-400)',
    violet: 'var(--violet-400)'
  }[tone];
  return /*#__PURE__*/React.createElement(Card, {
    variant: "surface",
    interactive: true,
    glow: "none",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-inset)',
      boxShadow: 'inset 0 0 0 1px var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22,
    color: c
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--heading-sm-size)',
      fontWeight: 'var(--heading-sm-weight)',
      letterSpacing: 'var(--heading-sm-ls)',
      color: 'var(--text-hi)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-lh)',
      color: 'var(--text-mute)'
    }
  }, body));
}
function StepCard({
  n,
  title,
  body
}) {
  return /*#__PURE__*/React.createElement(Card, {
    variant: "outline",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-sm-size)',
      color: 'var(--pink-400)',
      letterSpacing: '.1em'
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--heading-md-size)',
      fontWeight: 'var(--heading-md-weight)',
      color: 'var(--text-hi)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-lh)',
      color: 'var(--text-mute)'
    }
  }, body));
}
function CheckList({
  items,
  tone = 'cyan'
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      alignItems: 'flex-start',
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-lh)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: tone === 'pink' ? 'var(--pink-400)' : 'var(--cyan-400)',
    style: {
      marginTop: 5
    }
  }), /*#__PURE__*/React.createElement("span", null, i))));
}
Object.assign(window, {
  Container,
  Section,
  SectionHead,
  FeatureTile,
  StepCard,
  CheckList,
  Appear,
  AppearGroup
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.MeshBackdrop = __ds_scope.MeshBackdrop;

__ds_ns.MockupFrame = __ds_scope.MockupFrame;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TextArea = __ds_scope.TextArea;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.StatCard = __ds_scope.StatCard;

})();
