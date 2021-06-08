/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  LitElement,
  html,
  customElement,
  property,
  CSSResult,
  TemplateResult,
  css,
  PropertyValues,
  internalProperty,
} from 'lit-element';
import {
  HomeAssistant,
  hasConfigOrEntityChanged,
  LovelaceCardEditor,
  getLovelace,
} from 'custom-card-helpers'; // This is a community maintained npm module with common helper functions/types

import './editor';

import type { WashingMachineCardConfig } from './types';
import { CARD_VERSION } from './const';

import washingMachineImage from './images/washing-machine-cleaning.png';

/* eslint no-console: 0 */
console.info(
  `%c  WASHER-MACHINE-CARD %c  ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'washing-machine-card',
  name: 'Washing Machine Card',
  description: 'A washing machine card',
});

// TODO Name your custom element
@customElement('washing-machine-card')
export class WashingMachineCard extends LitElement {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('washing-machine-card-editor');
  }

  public static getStubConfig(): object {
    return {};
  }

  // TODO Add any properities that should cause your element to re-render here
  // https://lit-element.polymer-project.org/guide/properties
  @property({ attribute: false }) public hass!: HomeAssistant;
  @internalProperty() private config!: WashingMachineCardConfig;

  // https://lit-element.polymer-project.org/guide/properties#accessors-custom
  public setConfig(config: WashingMachineCardConfig): void {
    // TODO Check for required fields and that they are of the proper format
    if (!config) {
      throw new Error("Invalid configuration");
    }

    if (config.test_gui) {
      getLovelace().setEditMode(true);
    }

    this.config = {
      name: 'Washer Machine',
      ...config,
    };
  }

  // https://lit-element.polymer-project.org/guide/lifecycle#shouldupdate
  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.config) {
      return false;
    }

    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  protected timeToMinutes(time): number {
    const timeSplitted = time.split(":")
    const numbers = [parseInt(timeSplitted[0]), parseInt(timeSplitted[1])]

    return numbers[0] * 60 + numbers[1];
  }

  protected getTemperature(temperature): TemplateResult | void {
    if (temperature != "-") {
      const numbers = temperature.replace( /^\D+/g, '');

      return html`<ha-icon class="washing-machine-card-icon" icon="mdi:thermometer"></ha-icon> ${numbers}°`
    }
  }

  protected getDoorLock(doorLock): TemplateResult {
    console.log(doorLock)

    if (doorLock == "on") {
      return html`<ha-icon class="washing-machine-card-icon" icon="mdi:lock"></ha-icon>`
    } else {
      return html`<ha-icon class="washing-machine-card-icon" icon="mdi:lock-off"></ha-icon>`
    }
  }

  // https://lit-element.polymer-project.org/guide/templates
  protected render(): TemplateResult | void {
    // TODO Check for stateObj or other necessary things and render a warning if missing
    if (this.config.show_warning) {
      return this._showWarning("Show Warning");
    }

    if (this.config.show_error) {
      return this._showError("Show Error");
    }

    const entity = this.hass.states[this.config.entity];
    const attrs = entity.attributes;

    return html`
      <ha-card tabindex="0">
        <div class="washing-machine-card washing-machine-card-${entity.state}">
          <div class="bars top-bar">
            <div></div>
            <div><strong>${attrs["run_state"] == "-" ? entity.state : attrs["run_state"]}</strong></div>
            <div class="top-bar-right">
              ${this.getDoorLock(attrs["door_lock"])}
              ${this.getTemperature(attrs["water_temp"])}
            </div>
          </div>
          <div class="content">
            <div class="image">
              <img src="${washingMachineImage}" />
            </div>
            <div class="name">
              ${attrs["friendly_name"]}
            </div>
          </div>
          <div class="bars bottom-bar">
            <div>
              <span class="number"> ${this.timeToMinutes(attrs["initial_time"])} </span> minutes <br/> total
            </div>
            <div>
              <span class="number"> ${this.timeToMinutes(attrs["remain_time"])} </span> minutes <br/> remaining
            </div>
          </div>
        </div>
      </ha-card>
    `;
  }

  private _showWarning(warning: string): TemplateResult {
    return html`
      <hui-warning>${warning}</hui-warning>
    `;
  }

  private _showError(error: string): TemplateResult {
    const errorCard = document.createElement('hui-error-card');
    errorCard.setConfig({
      type: 'error',
      error,
      origConfig: this.config,
    });

    return html`
      ${errorCard}
    `;
  }

  static get styles(): CSSResult {
    return css`
      .washing-machine-card {
        color: var(--primary-text-color);
        background: var(--card-background-color);
        border-radius: 4px;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }

      .washing-machine-card .content {
        display: flex;
        flex-grow: 1;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }

      .washing-machine-card .name {
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        padding-bottom: 10px;
      }

      .washing-machine-card .image {
        padding: 10px;
      }

      .washing-machine-card .image img {
        max-height: 180px;
      }

      .washing-machine-card .bars {
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
      }

      .washing-machine-card .top-bar > div {
        flex: 1;
        text-align: center;
      }

      .washing-machine-card .top-bar > div:first-child {
        text-align: left;
      }

      .washing-machine-card .top-bar > div:last-child {
        text-align: right;
      }

      .washing-machine-card .number {
        font-size: 18px;
        font-weight: bold;
      }

      .washing-machine-card .bottom-bar {
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        padding: 10px 0;
        flex-shrink: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: center;
      }

      .washing-machine-card .bottom-bar > div {
        flex-grow: 1;
        border-right: 1px solid rgba(255, 255, 255, 0.2);
      }

      .washing-machine-card .bottom-bar > div:last-child {
        border-right: 0;
      }

      .washing-machine-card-icon {
        --mdc-icon-size: 16px;
        height: 16px;
        width: 16px;
      }

      .washing-machine-card-off .image {
        opacity: 0.5;
      }

      .washing-machine-card-off .top-bar-right {
        opacity: 0;
      }
    `;
  }
}
