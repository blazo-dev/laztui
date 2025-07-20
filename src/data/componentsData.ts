import buttonsPreview from "../components/showcases/components/buttons/preview.html?raw";
import buttonsCode from "../components/showcases/components/buttons/code.html?raw";
import inputsPreview from "../components/showcases/components/inputs/preview.html?raw";
import inputsCode from "../components/showcases/components/inputs/code.html?raw";
import cardsPreview from "../components/showcases/components/cards/preview.html?raw";
import cardsCode from "../components/showcases/components/cards/code.html?raw";
import modalsPreview from "../components/showcases/components/modals/preview.html?raw";
import modalsCode from "../components/showcases/components/modals/code.html?raw";
import alertsPreview from "../components/showcases/components/alerts/preview.html?raw";
import alertsCode from "../components/showcases/components/alerts/code.html?raw";

export interface UIComponentSection {
    id: string;
    title: string;
    description: string;
    previewHTML: string;
    codeHTML: string;
}

export const componentsData: UIComponentSection[] = [
    {
        id: "buttons",
        title: "Component: Buttons",
        description:
            "Interactive button components with various styles and states",
        previewHTML: buttonsPreview,
        codeHTML: buttonsCode,
    },
    {
        id: "inputs",
        title: "Component: Inputs",
        description:
            "Form input elements with modern styling and validation states",
        previewHTML: inputsPreview,
        codeHTML: inputsCode,
    },
    {
        id: "cards",
        title: "Component: Cards",
        description:
            "Flexible content containers with various layouts and styles",
        previewHTML: cardsPreview,
        codeHTML: cardsCode,
    },
    {
        id: "modals",
        title: "Component: Modals",
        description:
            "Dialog boxes and overlay components for user interactions",
        previewHTML: modalsPreview,
        codeHTML: modalsCode,
    },
    {
        id: "alerts",
        title: "Component: Alerts",
        description:
            "Notification and alert components for different message types",
        previewHTML: alertsPreview,
        codeHTML: alertsCode,
    },
];
