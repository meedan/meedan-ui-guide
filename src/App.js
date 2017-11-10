import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import logo from './meedan-white.svg';
import * as shared from './lib/check-web/src/app/styles/js/shared';

// Icons
import IconSearch from 'material-ui/svg-icons/action/search';
import IconInsertPhoto from 'material-ui/svg-icons/editor/insert-photo';
import IconLink from 'material-ui/svg-icons/content/link';
import IconMoreHoriz from 'material-ui/svg-icons/navigation/more-horiz';
import IconArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import IconDelete from 'material-ui/svg-icons/action/delete';
import IconEdit from 'material-ui/svg-icons/image/edit';

// Buttons
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import Drawer from 'material-ui/Drawer';

// Menus
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';

// Forms
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';

// Other components
import { Card } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import Divider from 'material-ui/Divider';
import { Tabs, Tab } from 'material-ui/Tabs';
import AutoComplete from 'material-ui/AutoComplete';
import Popover from 'material-ui/Popover';
import Checkbox from 'material-ui/Checkbox';
import Dialog from 'material-ui/Dialog';
import Chip from 'material-ui/Chip';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import DropDownMenu from 'material-ui/DropDownMenu';
import Paper from 'material-ui/Paper';

// Internal
import EnhancedButton from 'material-ui/internal/EnhancedButton';

injectGlobal`
  body {
    margin: 0;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  code {
    font-size: 1.2em;
    background-color: ${shared.black05};
    padding: 2px 4px;
    border-radius: 4px;
    font-weight: 600;
  }
`;

const StyledLogo = styled.img`
  width: 80px;
  height: 80px;
`;

const StyledInset = styled.div`
  padding: 32px 16px;
  max-width: 600px;
`;

const StyledSection = styled.section`
  border-bottom: 1px solid ${shared.black16};
  ${props => (props.inverted ? 'background-color: black; color: white;' : null)}
`;

const StyledSwatch = styled.div`
  width: ${shared.units(15)};
  height: ${shared.units(15)};
  background-color: ${props => props.color};
  padding: ${shared.units(1)};
  border-radius: ${shared.defaultBorderRadius};
  flex-shrink: 0;
  &::before, &::after {
    content: "${props => props.colorName}";
    display: block;
    ${props => (props.invert ? `color: ${shared.black87}` : 'color: white')};
  }
  &::before {
    font-weight: 700;
  }
  &::after {
    content: "${props => props.color}";
  }
`;

const StyledAvatar = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  background-color: ${shared.black16};
  padding: ${shared.units(1)};
  border-radius: ${props => (props.round ? '100%' : '2px')};
  flex-shrink: 0;
  margin-right: ${shared.units(1)};
  &::before, &::after {
    content: ${props => (props.round ? 'Member' : 'Source')};;
    display: block;
  }
`;

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(shared.muiThemeWithoutRtl)}>
        <StyledSection inverted>
          <StyledInset>
            <StyledLogo src={logo} alt="" />
            <h1>Meedan User Interface Guide</h1>
          </StyledInset>

          <StyledInset>
            <p>
              2017 November
            </p>
          </StyledInset>
        </StyledSection>

        <StyledSection>
          <StyledInset>
            <p>This guide is intended as an extension of the <a href="https://material.io/guidelines">Material UI Guidelines</a> as implemented by the <a href="http://material-ui.com">Material-UI React library</a>, developed in tandem with the <a href="https://docs.google.com/spreadsheets/d/1u8Dio9qLhQJRAFcsvZ04rXcM2_ZH5s_iuX9SpIH-VBY/edit#gid=1985553520">2017 Check copywriting audit</a>.</p>
          </StyledInset>
        </StyledSection>

        <StyledSection>
          <StyledInset>
            <h2>Structural overview</h2>
            <shared.Row>
              <div style={{ width: '400px', flexShrink: 0 }}>
                <p>AppBar</p>
                <p>Main icon</p>
                <p>My avatar</p>
                <p>“Me” menu</p>
                <p>Title</p>
                <p>Drawer</p>
                <p>Body</p>
                <p>Report</p>
                <p>Metadata row</p>
                <p>Actions menu</p>
                <p>Source</p>
                <p>Metadata row</p>
                <p>Actions menu</p>
                <p>Footer</p>
              </div>

              <div>
                <img src="http://placehold.it/500x500" />
              </div>
            </shared.Row>
          </StyledInset>
        </StyledSection>

        <StyledSection>
          <StyledInset>
            <h2>Colors</h2>
            <shared.Row wrap>
              <StyledSwatch color={shared.checkBlue} colorName="checkBlue" />
              <StyledSwatch invert color={shared.black02} colorName="black02" />
              <StyledSwatch invert color={shared.black05} colorName="black05" />
              <StyledSwatch invert color={shared.black16} colorName="black16" />
              <StyledSwatch color={shared.black38} colorName="black38" />
              <StyledSwatch color={shared.black54} colorName="black54" />
              <StyledSwatch color={shared.black87} colorName="black87" />
              <StyledSwatch color={shared.alertRed} colorName="alertRed" />
              <StyledSwatch invert color={shared.highlightBlue} colorName="highlightBlue" />
              <StyledSwatch color={shared.modalBlue} colorName="modalBlue" />
            </shared.Row>
          </StyledInset>
        </StyledSection>
        <StyledSection>
          <StyledInset>
            <h2>Typography</h2>
            <shared.Text font={shared.display3}>display3</shared.Text>
            <shared.Text font={shared.display2}>display2</shared.Text>
            <shared.Text font={shared.display1}>display1</shared.Text>
            <shared.Text font={shared.headline}>headline</shared.Text>
            <shared.Text font={shared.title}>title</shared.Text>
            <shared.Text font={shared.subheading2}>subheading2</shared.Text>
            <shared.Text font={shared.subheading1}>subheading1</shared.Text>
            <shared.Text font={shared.body2}>body2</shared.Text>
            <shared.Text font={shared.body1}>body1</shared.Text>
            <shared.Text font={shared.caption}>caption</shared.Text>
            <shared.Text font={shared.tiny}>tiny</shared.Text>
          </StyledInset>
        </StyledSection>
        <StyledSection>
          <StyledInset>
            <h3>Body</h3>
            <p>The layout should always have at least 2 units of padding on the bottom, so no body content ever touches the bottom row of the screen (except flush footers).</p>

            <h3>AppBar (Header)</h3>
            <p>The icon of the current team context (if any) should appear.</p>
            <p>A title should be present to describe the current page.</p>
            <p>A team search affordance should appear prominently.</p>
            <p>Your own avatar should appear prominently.</p>

          </StyledInset>
        </StyledSection>

        <StyledSection>
          <StyledInset>
            <h3>Menus</h3>

            <p>Menu items may be disabled if not applicable to a certain context. Inactive menu items still appear in the menu, but they are visibly disabled (appear in a lighter shade of grey).</p>

            <Paper style={{ display: 'inline-block' }}>
              <Menu>
                <MenuItem primaryText="Sleepy" />
                <MenuItem primaryText="Dopey" />
                <MenuItem disabled primaryText="Grumpy" />
              </Menu>
            </Paper>

            <p>See the <a href="http://www.material-ui.com/#/components/menu">Material-UI API for Menus</a></p>

          </StyledInset>
        </StyledSection>

        <StyledSection>

          <StyledInset>
            <h3>Blank State</h3>
            <p>There are at least two ways to deal with blank states: Displaying or avoiding.</p>
            <p>Displaying blank state: you need to consider to be clear and welcoming in the same time, or just go simply with a copy like "No activity yet"</p>
            <p>Avoiding blank state: Show the user what kind of content can be added, small tips to use the platform, remember to keep it brief.</p>
          </StyledInset>
        </StyledSection>

        <StyledSection>

          <StyledInset>
            <h3>Verification status</h3>
            <p>Status are very important part of the user experience on Check, as a collaborative verification platform, users change reports status from "UNSTARTED" to "IN PROGRESS" or "VERIFIED", status label the report.</p>
            <p>Statuses are one of the few things in Check that have a color, which is carefully chosen for usability purposes, not decoration.</p>
            <p>When it appears as a button, we capitalize it.</p>
          </StyledInset>
        </StyledSection>

        <StyledSection>

          <StyledInset>
            <h3>Buttons and links</h3>
            <p>Buttons direct users towards action easily and clearly. Capitalize all the buttons.</p>

            <h3>Links</h3>
            <p>Links are sentence case.</p>
            <p>Links are used for secondary actions which open new views, not for app behaviors.</p>
            <p>Link color should be distinct from surrounding text.</p>

            <h3>Flat button</h3>
            <p>Use by default for app behaviors.</p>

            <FlatButton label="Add task" />

            <h3>Raised button</h3>

            <p>Use raised buttons in a busy space where there are competing calls to action, or the button could be missed by the user.</p>

            <RaisedButton label="Save" />

            <p>If there are multiple possible buttons for a given interaction, one should be more visually prominent with the <code>primary</code> prop.</p>

            <shared.Row>
              <shared.Offset>
                <RaisedButton label="Cancel" />
              </shared.Offset>
              <RaisedButton primary label="Save" />
            </shared.Row>

            <h3>Big button</h3>
            <p>In Check we use big buttons on the sign in page, to show our different way to sign in.</p>

            <h3>IconButton with Tooltip</h3>
            <p>An IconButton can have a tooltip.</p>
            <p>A tooltip is a hidden text that only appears if the user hovers over it. We use tooltips to explain a button or an action, but only when there is not room for regular helper text.</p>
            <p>Tooltips should be fewer than 5 words, and not show rich multi-line or multimedia information.</p>
            <p>A tooltip should positioned on the top or bottom, depending on which is the most legible in context.</p>

            <shared.Row>
              <IconButton tooltip="Hayy">
                <IconEdit />
              </IconButton>

              <p style={{ font: shared.caption, color: shared.black54 }}>Hover to view tooltip.</p>
            </shared.Row>
          </StyledInset>
        </StyledSection>
        <StyledSection>
          <StyledInset>
            <h3>Forms</h3>

            <p>In general use the float label pattern. Labels describe the purpose of text input elements. By "floating" they keep the size of the input to a minimum. </p>

            <div>
              <TextField
                floatingLabelText="Label text with no default value"
              />
            </div>

            <h4>Default value</h4>
            <p>Sometimes the value of the text field is populated with a default value.</p>

            <div>
              <TextField
                floatingLabelText="Label text"
                defaultValue="Default value"
              />
            </div>

            <h4>Disabled text fields</h4>
            <p>A text field can be disabled to indicate that it is not usable in the current state.</p>

            <div>
              <TextField
                floatingLabelText="Disabled text field"
                disabled
              />
            </div>

            <h4>Multiline text inputs</h4>
            <p>Sometimes text input needs to span multiple lines. Usually we have a scrollbar after four lines. </p>

            <div>
              <TextField
                floatingLabelText="Label text"
                defaultValue="This Text field accepts multiple lines"
                multiLine
                rowsMax={4}
              />
            </div>


            <h4> Helper text</h4>
            <p>Helper text is optional copy that explains something in detail than the text field. On forms, errors appear in the same position. Helper text is always in a smaller fonts.</p>

            <div>
              <TextField
                floatingLabelText="Add your response"
              />
              <div style={{ font: shared.caption, color: shared.black54, marginTop: '-4px' }}>
                This is the helper text
              </div>
            </div>

            <h4>Errors</h4>
            <p>Communicate the error message in a human way to the user; why is it happening? Make it clear: is it a user-input error, or is it an app-error? Don't be afraid to use the word "error" to address an error.</p>
            <p>Communicate what should happen next: Make sure to address how user can resolve it or at least how to report it to team using a "Contact Human" link.</p>
            <p>When possible we put the validation message directly on the field in question. When the error relates to a combination of two fields, the validation message goes directly above the form. For example: when you type your password twice and it doesn't match, the error goes above the form instead of on both of the fields.</p>
            <p>Errors should be red.</p>

            <div>
              <TextField
                floatingLabelText="Label text with no default value"
                errorText="Error text"
              />
            </div>

            <h4>Validation timing</h4>
            <p>When possible and logical, validate after a user interacts with a form element, for example after changing focus from password box to submit button, not after the form is submitted.</p>

            <h4>Form submission</h4>
            <p>There should always be a button that submits the form.</p>
            <p>When I press <code>return</code> the form submits.</p>
            <p>The form should pass basic validation to be submittable. The submit button should be disabled if the form can not be submitted.</p>

            <RaisedButton disabled label="Disabled" />

            <h4>Creating new lines</h4>

            <p>If <code>return</code> will submit the form, pressing <code>option</code>+<code>return</code> should add new lines.</p>
            <p>If the form is multiline and you might commonly use it to compose multiple paragraphs, <code>return</code> should create a new line.</p>

            <h4>Prevent repeat data entry</h4>
            <p>After user submits content, disable the submit button and clear the input field on submission.</p>

            <h4>Prevent lost data</h4>
            <p>Give a warning if a user is navigating away from an input with partially submitted data. When possible, cache partial form data in the user's browser.</p>

            <p>See the <a href="https://material.io/guidelines/patterns/errors.html#errors-usage">Material UI validation guidelines</a>.</p>
          </StyledInset>
        </StyledSection>

        <StyledSection>
          <StyledInset>
            <h3>User names and avatars</h3>
            <p>Generally user names should appear written out as full first and last name. User names should link to the profile page.</p>

            <p>Both user names and avatars should reveal a user tooltip in most contexts.</p>

            <p>Avatars can appear in three sizes, and be square (sources) or round (for members.)</p>

            <shared.Row>
              {/* Todo: replace this with the real avatar component */}
              <StyledAvatar round size={shared.avatarSizeLarge} />
              <StyledAvatar round size={shared.avatarSize} />
              <StyledAvatar round size={shared.avatarSizeSmall} />
              <StyledAvatar round size={shared.avatarSizeExtraSmall} />
              <StyledAvatar square size={shared.avatarSizeLarge} />
              <StyledAvatar square size={shared.avatarSize} />
              <StyledAvatar round size={shared.avatarSizeSmall} />
            </shared.Row>

          </StyledInset>
        </StyledSection>

        <StyledSection>
          <StyledInset>
            <h3>Disclaimers</h3>
            <p>We use disclaimers to warn and notify — for example, to tell users what's the best browser to view our or to warn that signing in with Twitter won't make our product post on their behalf.</p>
          </StyledInset>
        </StyledSection>

        <StyledSection>

          <StyledInset>
            <h3>Tags</h3>
            <p>Clicking on the tag should always open a search in the same window for that tag.</p>

            <p>Tags appear as Material design <em>Chips</em>.</p>

            <Chip onRequestDelete>Super important</Chip>
          </StyledInset>
        </StyledSection>

        <StyledSection>

          <StyledInset>
            <h3>Timestamps</h3>
            <p>On Check a timestamp shows when content was added to Check.</p>
            <p>Using 24-hour timestamp, so we don't confuse our international audience with 12h am pm</p>
            <p>Show timezones.</p>
            <p>Show time and date when you hover on timestamp</p>
            <p>Write abbreviated month names e.g “Aug” and avoid representing months as numbers like “08”.</p>
            <p>Customize time zone for users where they are in the world right now.</p>
            <p>Hovering over the time stamp should show the exact time, with time zone indicated for the user's browser</p>
            <p>Clicking on the time stamp takes the user to <a href="http://time.is">time.is</a> URL</p>
            <p>Timestamps should follow the following format:</p>
            <p>“x minutes ago” up to 59 minutes</p>
            <p>“x hours ago” up to 24 hours</p>
            <p>“x days ago” up to  x weeks ago</p>
          </StyledInset>
        </StyledSection>

        <StyledSection>
          <StyledInset>
            <h3>Success messages</h3>
            <p>You don't have to use the word success in your success message.</p>
            <p>Try to guide the user to what's next.</p>
            <p>Links in user-generated content</p>
            <p>When a user types or pastes content that contains a link starting with “http” the link should automatically be hyperlinked so it is clickable.</p>
            <p>Exception: hyperlinks should not be automatically added where clicking on UGC content generates a system action. So links should not be added in a report title or tag, where clicking yields other behavior.</p>
            <p>URL should click to open in a new window.</p>
            <p>Long URLs should always soft wrap to the bounding box</p>
          </StyledInset>
        </StyledSection>

        <StyledSection>

          <StyledInset>
            <h3>Tab navigation</h3>
            <p>Tab-based navigation should flow in a logical order.</p>
            <p>Test with appropriate accessibility software, not just browsers.</p>
          </StyledInset>
        </StyledSection>

        <StyledSection>

          <StyledInset>
            <h3>Lists of projects</h3>
            <p>Projects should be listed with most recently active first.</p>
          </StyledInset>
        </StyledSection>

        <StyledSection>

          <StyledInset>
            <h3>Filter/sort</h3>
            <p>Filtering and sorting should apply immediately.</p>
            <p>The total number of items hidden by filters should be indicated.</p>
          </StyledInset>
        </StyledSection>
        <StyledSection>
          <StyledInset>
            <h3>Icons</h3>
            <p>Whenever possible, icons from the official Material-UI icon set should be used.</p>

            <IconSearch />
            <IconInsertPhoto />
            <IconLink />
            <IconMoreHoriz />
            <IconArrowBack />
            <KeyboardArrowRight />
            <IconDelete />
            <IconEdit />

          </StyledInset>
        </StyledSection>

        <StyledSection>
          <StyledInset>
            <h3>The Ink ripple</h3>
          </StyledInset>
        </StyledSection>
        <StyledSection>
          <StyledInset>
            <h3>Color</h3>
          </StyledInset>
        </StyledSection>
        <StyledSection>
          <StyledInset>
            <h3>The 8px grid</h3>
          </StyledInset>
        </StyledSection>

        <StyledSection>
          <StyledInset>

            <h2>Copywriting guidelines</h2>

            <h3>Language</h3>
            <p>Keep it short.</p>
            <p>Prefer present tense.</p>
            <p>Use consistent terms throughout.</p>
            <p>Try not to use "We" inside the app, it's not about us, it's about the user. We use "We"  with cautious on boarding and mail confirming, after user login we don't use "We".</p>
            <p>We address Check users by second person (you, your) only in dialogic interactions such as success, confirmation and acknowledgment messages, but avoid it for information architecture: for example we prefer “My teams” not “Your teams.”</p>

            <h3>Tone</h3>
            <p>Use tone of voice communicate values and vision. Prefer words that connote values, such as "group" instead of "organization" and "we believe in collaboration" instead of "build a team." Communicate why we are building this, not just what we are building.</p>

            <h3>Capitalization and punctuation</h3>
            <p>In general, use sentence-style capitalization.</p>
            <p>Avoid periods after hyperlinks and emails.</p>
            <p>Using numerals instead of words.</p>
            <p>Fully capitalize buttons.</p>

            <h3>Global writing</h3>
            <p>Check supports Arabic, French, Portuguese, and English.</p>
            <p>We strive to build tools that anyone in the world can use.</p>
            <p>Use simple English to be easily understood by our international users.</p>

            <h3>Further reading</h3>
            <p>Refer to the <a href="https://material.io/guidelines/style/writing.html">Material guidelines on writing</a>.</p>
          </StyledInset>
        </StyledSection>

      </MuiThemeProvider>
    );
  }
}

export default App;
