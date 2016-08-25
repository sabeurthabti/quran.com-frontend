import React, { Component, PropTypes } from 'react';

import MenuItem from 'react-bootstrap/lib/MenuItem';
import { alphabetically } from '../../utils/sort.js';
const style = require('./style.scss');

// To save API calls.
export const slugs = [
  {
    language: 'ar',
    name: 'ابن كثير',
    description: null,
    is_available: 1,
    cardinality: 'n_ayah',
    slug: 'resource_id_14',
    id: 13,
    type: 'tafsir'
  },
  {
    language: 'en',
    name: 'Dr. Ghali',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'dr_ghali',
    id: 16,
    type: 'translation'
  },
  {
    language: 'en',
    name: 'Muhsin Khan',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'muhsin_khan',
    id: 17,
    type: 'translation'
  },
  {
    language: 'en',
    name: 'Pickthall',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'pickthall',
    id: 18,
    type: 'translation'
  },
  {
    language: 'en',
    name: 'Sahih International',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'sahih_international',
    id: 19,
    type: 'translation'
  },
  {
    language: 'en',
    name: 'Shakir',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'shakir',
    id: 20,
    type: 'translation'
  },
  {
    language: 'en',
    name: 'Yusuf Ali',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'yusuf_ali',
    id: 21,
    type: 'translation'
  },
  {
    language: 'az',
    name: 'Azerbaijani',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'azerbaijani',
    id: 22,
    type: 'translation'
  },
  {
    language: 'bn',
    name: 'Bangla',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'bangla',
    id: 23,
    type: 'translation'
  },
  {
    language: 'bs',
    name: 'Bosnian',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'bosnian',
    id: 24,
    type: 'translation'
  },
  {
    language: 'cs',
    name: 'Czech',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'czech',
    id: 25,
    type: 'translation'
  },
  {
    language: 'de',
    name: 'German',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'german',
    id: 26,
    type: 'translation'
  },
  {
    language: 'es',
    name: 'Spanish',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'spanish',
    id: 27,
    type: 'translation'
  },
  {
    language: 'fa',
    name: 'Farsi',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'farsi',
    id: 28,
    type: 'translation'
  },
  {
    language: 'fi',
    name: 'Finnish',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'finnish',
    id: 29,
    type: 'translation'
  },
  {
    language: 'fr',
    name: 'French',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'french',
    id: 30,
    type: 'translation'
  },
  {
    language: 'ha',
    name: 'Hausa',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'hausa',
    id: 31,
    type: 'translation'
  },
  {
    language: 'id',
    name: 'Indonesian',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'indonesian',
    id: 32,
    type: 'translation'
  },
  {
    language: 'it',
    name: 'Italian',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'italian',
    id: 33,
    type: 'translation'
  },
  {
    language: 'ja',
    name: 'Japanese',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'japanese',
    id: 34,
    type: 'translation'
  },
  {
    language: 'ko',
    name: 'Korean',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'korean',
    id: 35,
    type: 'translation'
  },
  {
    language: 'ml',
    name: 'Malayalam',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'malayalam',
    id: 36,
    type: 'translation'
  },
  {
    language: 'mrn',
    name: 'Maranao',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'maranao',
    id: 37,
    type: 'translation'
  },
  {
    language: 'ms',
    name: 'Malay',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'malay',
    id: 38,
    type: 'translation'
  },
  {
    language: 'nl',
    name: 'Dutch',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'dutch',
    id: 39,
    type: 'translation'
  },
  {
    language: 'no',
    name: 'Norwegian',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'norwegian',
    id: 40,
    type: 'translation'
  },
  {
    language: 'pl',
    name: 'Polish',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'polish',
    id: 41,
    type: 'translation'
  },
  {
    language: 'pt',
    name: 'Portuguese',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'portuguese',
    id: 42,
    type: 'translation'
  },
  {
    language: 'ro',
    name: 'Romanian',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'romanian',
    id: 43,
    type: 'translation'
  },
  {
    language: 'ru',
    name: 'Russian',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'russian',
    id: 44,
    type: 'translation'
  },
  {
    language: 'so',
    name: 'Somali',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'somali',
    id: 45,
    type: 'translation'
  },
  {
    language: 'sq',
    name: 'Albanian',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'albanian',
    id: 46,
    type: 'translation'
  },
  {
    language: 'sv',
    name: 'Swedish',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'swedish',
    id: 47,
    type: 'translation'
  },
  {
    language: 'sw',
    name: 'Swahili',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'swahili',
    id: 48,
    type: 'translation'
  },
  {
    language: 'ta',
    name: 'Tamil',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'tamil',
    id: 49,
    type: 'translation'
  },
  {
    language: 'th',
    name: 'Thai',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'thai',
    id: 50,
    type: 'translation'
  },
  {
    language: 'tr',
    name: 'Turkish',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'turkish',
    id: 51,
    type: 'translation'
  },
  {
    language: 'tt',
    name: 'Tatar',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'tatar',
    id: 52,
    type: 'translation'
  },
  {
    language: 'ur',
    name: 'Urdu',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'urdu',
    id: 53,
    type: 'translation'
  },
  {
    language: 'uz',
    name: 'Uzbek',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'uzbek',
    id: 54,
    type: 'translation'
  },
  {
    language: 'zh',
    name: 'Chinese',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'chinese',
    id: 55,
    type: 'translation'
  },
  {
    language: 'en',
    name: 'Transliteration',
    description: null,
    is_available: 1,
    cardinality: '1_ayah',
    slug: 'transliteration',
    id: 56,
    type: 'transliteration'
  }
].sort((current, next) => current.name - next.name);

export default class ContentDropdown extends Component {
  static propTypes = {
    onOptionChange: PropTypes.func.isRequired,
    options: PropTypes.object.isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    className: 'col-md-3'
  }

  shouldComponentUpdate(nextProps) {
    return this.props.options !== nextProps.options;
  }

  handleRemoveContent = () => {
    const { onOptionChange } = this.props;

    onOptionChange({content: []});
  }

  handleOptionSelected(id) {
    const { onOptionChange, options: { content } } = this.props;

    if (content.find(option => option === id)) {
      onOptionChange({content: content.filter(option => option !== id)});
    } else {
      onOptionChange({content: [...content, id]});
    }
  }

  renderItems(items) {
    const { options: { content } } = this.props;

    return items.map(slug => {
      const checked = content.find(option => option === slug.id);

      return (
        <li key={slug.name} className={style.item}>
          <input
            type="checkbox"
            className={style.checkbox}
            id={slug.id + slug.language}
            onChange={() => this.handleOptionSelected(slug.id)}
            checked={checked}
          />

          <label htmlFor={slug.id + slug.language} className={style.label}>
            {slug.name}
          </label>
        </li>
      );
    });
  }

  renderEnglishList() {
    return this.renderItems(
      slugs.filter(slug => slug.language === 'en')
    );
  }

  renderLanguagesList() {
    return this.renderItems(
      slugs
      .filter(slug => slug.language !== 'en' && slug.type === 'translation')
      .sort(alphabetically('name'))
    );

  }

  render() {
    const { className, options: { content } } = this.props;

    return (
      <div className={`dropdown ${className} ${style.dropdown}`}>
        <button
          className="btn btn-link no-outline"
          id="content-dropdown"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Translations
          <span className="caret" />
        </button>
        <ul className="dropdown-menu" aria-labelledby="reciters-dropdown">
          {
            content.length &&
              <MenuItem eventKey={1} onClick={this.handleRemoveContent}>Remove all</MenuItem>
          }
          <MenuItem header>English</MenuItem>
          {this.renderEnglishList()}
          <MenuItem divider />
          <MenuItem header>Other Languages</MenuItem>
          {this.renderLanguagesList()}
        </ul>
      </div>
    );
  }
}
