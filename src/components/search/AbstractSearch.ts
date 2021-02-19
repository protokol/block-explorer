import { Component, Vue } from "vue-property-decorator";

@Component
export class AbstractSearch extends Vue {
  protected onInputChange(event: any) {
    const { name, value } = event.target;
    this.emitInput({ name, value });
  }

  protected onEnterKey(event: any) {
    this.$emit("search");
  }

  protected emitInput(value: object) {
    this.$emit("search", value);
  }
}
