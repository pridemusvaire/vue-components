import * as Config from './../config.json';

export default {

  /**
   * The allowed contextual types
   */
  contextualTypes: [
    'danger',
    'info',
    'primary',
    'success',
    'warning',
    'dark',
  ],

  /**
   * The element separator
   */
  elementSeparator() {
    if (Config.element_separator) {
      return Config.element_separator;
    }

    return '__';
  },

  /**
   * The modifier separator
   */
  modifierSeparator() {
    if (Config.modifier_separator) {
      return Config.modifier_separator;
    }

    return '--';
  },

  /**
   * Method which will return the corrected contextual class
   *
   * @param element The given element
   * @param classType The given class type
   * @returns {string} The corrected contextual class
   */
  contextualClass(element, classType) {
    let contextualClass;

    if (classType && this.contextualTypes.indexOf(classType.toLowerCase()) !== -1) {
      contextualClass = this.variant(element, classType);
    }

    return contextualClass;
  },

  /**
   * Method which transform an element to a BEM-element
   *
   * @param block The name of the block
   * @param element The name of the element
   * @returns {string} The corrected class
   */
  has(block, element) {
    return block + this.elementSeparator() + element;
  },

  /**
   * Method which transforms an item to a BEM-modifier
   *
   * @param item The name of the item
   * @param variant The name of the variant
   * @returns {string} The corrected class
   */
  variant(item, variant) {
    return item + this.modifierSeparator() + variant;
  },

  /**
   * Method which will transform an item to an array of BEM-modifiers
   *
   * @param item The name of the item
   * @param variants The array variants
   */
  variants(item, variants) {
    const tempArray = [];

    variants.forEach((variant) => {
      tempArray.push(this.variant(item, variant));
    });

    return tempArray;
  },

  /**
   *
   * @param block
   * @param variants
   * @returns {Array}
   */
  blockClasses(block, variants) {
    let classNames = [];
    let modifiers = [];

    classNames.push(block);

    if (variants) {
      modifiers = this.variants(block, variants);
      classNames = classNames.concat(modifiers);
    }

    return classNames;
  },

  /**
   *
   * @param block
   * @param element
   * @param variants
   * @returns {Array}
   */
  elementClasses(block, element, variants) {
    let classNames = [];
    let modifiers = [];
    const elementClass = this.has(block, element);

    classNames.push(elementClass);

    if (variants) {
      modifiers = this.variants(elementClass, variants);
      classNames = classNames.concat(modifiers);
    }

    return classNames;
  },
};
