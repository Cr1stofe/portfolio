import { SocialTag } from './SocialTag';

export function ContactLinks() {
  return (
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
      <SocialTag
        link="mailto:cristofe.contact@gmail.com"
        name="email"
        label="E-mail"
        sublabel="cristofe.contact@gmail.com"
      />

      <SocialTag
        link="https://www.linkedin.com/in/cristofe-albuquerque/"
        name="linkedin"
        label="LinkedIn"
        sublabel="/in/cristofe-albuquerque"
      />

      <SocialTag
        link="https://github.com/Cr1stofe"
        name="github"
        label="GitHub"
        sublabel="@Cr1stofe"
      />
    </div>
  );
}
