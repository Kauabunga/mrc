import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { withStyles } from 'material-ui/styles';
import BaseField from '../BaseField/BaseField';

function renderInput(inputProps) {
  const { classes, home, value, ref, ...other } = inputProps;

  return (
    <TextField
      autoFocus={home}
      className={classes.textField}
      value={value}
      inputRef={ref}
      InputProps={{
        classes: {
          input: classes.input,
        },
        ...other,
      }}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight
            ? <span key={index} style={{ fontWeight: 300 }}>
                {part.text}
              </span>
            : <strong key={index} style={{ fontWeight: 500 }}>
                {part.text}
              </strong>;
        })}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    // height: 200,
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  textField: {
    width: '100%',
  },
});

// TODO rename address field?

class AutocompleteField extends Component {
  state = {
    suggestions: [],
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    window
      .fetch(
        `https://api.addressfinder.io/api/nz/address?key=${process.env
          .REACT_APP_ADDRESS_FINDER_CLIENT_KEY}&q=${value}`,
      )
      .then(response => response.json())
      .then(addresses => addresses.completions || [])
      .then(addresses => addresses.map(address => Object.assign({}, address, { label: address.a })))
      .then(addresses =>
        this.setState({
          suggestions: addresses,
        }),
      )
      .catch(err => {
        console.error(err);
      });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { classes, input } = this.props;

    return (
      <BaseField {...this.props}>
        <Autosuggest
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion,
          }}
          renderInputComponent={renderInput}
          suggestions={this.state.suggestions}
          onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
          renderSuggestionsContainer={renderSuggestionsContainer}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={{
            autoFocus: false,
            classes,
            placeholder: 'Search for your address',
            value: input.value,
            onChange: (event, { newValue }) => input.onChange(newValue),
          }}
        />
      </BaseField>
    );
  }
}

AutocompleteField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutocompleteField);
