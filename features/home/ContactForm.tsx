import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const ContactForm = () => {
  return (
    <form className={`bg-foreground text-background rounded-xl p-5 w-[42.5%]`}>
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Payment Method</FieldLegend>
          <FieldDescription>
            All transactions are secure and encrypted
          </FieldDescription>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input id="name" placeholder="Pedro Lopez" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" placeholder="john@example.com" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="project">Your project</FieldLabel>
              <Input
                type="textarea"
                id="project"
                placeholder="Tell me about your project."
                required
              />
            </Field>
          </FieldGroup>
        </FieldSet>
        <Button variant={"primary"} className={`py-6 text-md font-medium`}>
          Submit
        </Button>
      </FieldGroup>
      {/* Name */}
    </form>
  );
};

export default ContactForm;
