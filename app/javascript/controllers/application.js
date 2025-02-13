import { Application } from "@hotwired/stimulus";
import StimulusReflex from "stimulus_reflex";

const application = Application.start();
StimulusReflex.initialize(application, { isolate: true });

application.warnings = true;
application.debug = false;
window.Stimulus = application;

export { application }
