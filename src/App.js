import logo from "./meedan-white.svg";
import logoCheck from "./Check.png";
import * as shared from "./lib/check-web/src/app/styles/js/shared";

import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import styled from "styled-components";
import { injectGlobal } from "styled-components";
import { stripUnit, rgba } from "polished";

// Icons
import IconSearch from "material-ui/svg-icons/action/search";
import IconInsertPhoto from "material-ui/svg-icons/editor/insert-photo";
import IconLink from "material-ui/svg-icons/content/link";
import IconMoreHoriz from "material-ui/svg-icons/navigation/more-horiz";
import IconArrowBack from "material-ui/svg-icons/navigation/arrow-back";
import KeyboardArrowRight from "material-ui/svg-icons/hardware/keyboard-arrow-right";
import IconDelete from "material-ui/svg-icons/action/delete";
import IconEdit from "material-ui/svg-icons/image/edit";

// Buttons
import RaisedButton from "material-ui/RaisedButton";
import IconButton from "material-ui/IconButton";
import FlatButton from "material-ui/FlatButton";

// Menus
import MenuItem from "material-ui/MenuItem";
import Menu from "material-ui/Menu";

// Forms
import TextField from "material-ui/TextField";

// Other components
import { Card } from "material-ui/Card";
import { Tabs, Tab } from "material-ui/Tabs";
import Chip from "material-ui/Chip";
import Paper from "material-ui/Paper";
import CircularProgress from "material-ui/CircularProgress";

injectGlobal`
  body {
    margin: 0;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:300');

  code {
    font-weight: 600;
    font-family: "Roboto Mono", monospace;
  }

  h5 {
    text-transform: uppercase;
    margin-bottom: ${shared.units(1)};
    padding-bottom: ${shared.units(1)};
    border-bottom: 1px solid ${shared.black05};
  }

`;

const StyledLogo = styled.img`
  width: 80px;
  height: 80px;
`;

const StyledInset = styled.div`
  padding: 32px;
  border-right: 1px solid ${shared.black05};
  ${shared.mediaQuery.desktop`
    max-width: ${shared.units(60)};
  `}
  position: relative;
`;

const StyledSection = styled.section`
  border-bottom: 1px solid ${shared.black16};
  ${props => (props.inverted ? "background-color: black; color: white;" : null)}
`;

const StyledSwatch = styled.div`
  width: ${shared.units(15)};
  height: ${shared.units(15)};
  background-color: ${props => props.color};
  padding: ${shared.units(1)};
  border-radius: ${shared.defaultBorderRadius};
  flex-shrink: 0;
  margin: 0 ${shared.units(1)} ${shared.units(1)} 0;
  &::before, &::after {
    content: "${props => props.colorName}";
    display: block;
    ${props => (props.invert ? `color: ${shared.black87}` : "color: white")};
  }
  &::before {
    font-weight: 700;
  }
  &::after {
    content: "${props => props.color}";
  }
`;

const StyledBlankState = styled.div`
  font: ${shared.headline};
  color: ${shared.black38};
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledAvatar = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  background-color: ${shared.black16};
  border-radius: ${props => (props.round ? "100%" : "2px")};
  flex-shrink: 0;
  align-self: flex-start;
  margin: ${shared.units(3)} ${shared.units(10)} ${shared.units(3)} 0;
  font: ${shared.caption};
  position: relative;

  &::before {
    content: "${props => props.label}";
    display: block;
    color: ${shared.black54};
    margin-top: -24px;
  }

  &.pro {
    background-image: url('${logoCheck}');
    background-size: contain;
  }

  .badge {
    background-color: ${shared.opaqueBlack87};
    border-radius: ${shared.borderWidthMedium};
    color: ${shared.white};
    font: ${shared.tiny};
    line-height: 1.2;
    padding: ${shared.units(0.25)} ${shared.units(0.5)};
    position: absolute; 
    right: -${shared.units(1)};
    text-transform: uppercase;
    top: ${shared.units(0.5)};
  }
`;

const StyledPaper = styled(Paper)`
  width: 200px;
  height: 50px;
  text-align: center;
  margin-right: ${shared.units(1)};
  font: ${shared.caption};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${shared.black54};
`;

const StyledNote = styled.aside`
  font: ${shared.caption};

  ${shared.mediaQuery.desktop`
    position: absolute;
    right: -${shared.unitless(27)}px;
    width: ${shared.units(25)};
  `}

  a {
    text-decoration: none;
    color: ${shared.black54};
  }
  ul {
    list-style-type: none;
    padding-left: 0;
    li {
      margin-top: ${shared.units(2)};
      line-height: 1.2;
    }
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
            <p>
              <code>check-web@eee4ace0</code> • <code>material-ui@0.18.7</code>
            </p>
          </StyledInset>
        </StyledSection>

        <StyledSection>
          <StyledInset>

            <p>
              This guide is intended as an extension of the{" "}
              <a href="https://material.io/guidelines">
                Material UI Guidelines
              </a>{" "}
              as implemented by the{" "}
              <a href="http://material-ui.com">Material-UI React library</a>,
              developed in tandem with the{" "}
              <a href="https://docs.google.com/spreadsheets/d/1u8Dio9qLhQJRAFcsvZ04rXcM2_ZH5s_iuX9SpIH-VBY/edit#gid=1985553520">
                2017 Check copywriting audit
              </a>.
            </p>
          </StyledInset>
        </StyledSection>

        <StyledSection>
          <StyledInset>
            <h2>Colors</h2>
            <StyledNote>
              <ul>
                <li>
                  Colors and all standard design "tokens" live in{" "}
                  <a href="https://github.com/meedan/check-web/blob/develop/src/app/styles/js/shared.js">
                    shared.js
                  </a>.
                </li>
              </ul>
            </StyledNote>
            <shared.Row wrap>
              <StyledSwatch color={shared.checkBlue} colorName="checkBlue" />
              <StyledSwatch invert color={shared.black02} colorName="black02" />
              <StyledSwatch invert color={shared.black05} colorName="black05" />
              <StyledSwatch invert color={shared.black16} colorName="black16" />
              <StyledSwatch color={shared.black38} colorName="black38" />
              <StyledSwatch color={shared.black54} colorName="black54" />
              <StyledSwatch color={shared.black87} colorName="black87" />
              <StyledSwatch color={shared.alertRed} colorName="alertRed" />
              <StyledSwatch
                invert
                color={shared.highlightBlue}
                colorName="highlightBlue"
              />
              <StyledSwatch color={shared.modalBlue} colorName="modalBlue" />
            </shared.Row>
          </StyledInset>
        </StyledSection>
        <StyledSection>
          <StyledInset>
            <StyledNote>
              <ul>
                <li>
                  Typographic settings are defined as tokens in{" "}
                  <a href="https://github.com/meedan/check-web/blob/develop/src/app/styles/js/shared.js">
                    shared.js
                  </a>{" "}
                  with a CSS shorthand style that combines the font-family,
                  line-height and weight.
                </li>
                <li />

                <li>
                  So to implement a "title" style you could use:{" "}
                  <code>{"font: ${title};"}</code>
                </li>

                <li>
                  Typically for styling text we'd create a styled component and
                  pass a font token (eg. <code>body2</code>) into the tagged
                  template literal (eg between the backticks) as an interpolated
                  expression.
                </li>

                <li>
                  In{" "}
                  <a href="https://github.com/meedan/check-web/blob/develop/src/app/styles/js/shared.js">
                    shared.js
                  </a>{" "}
                  there is also a <code>Text</code> which accepts a{" "}
                  <code>font</code> prop.
                </li>
              </ul>
            </StyledNote>
            <h2>Typography</h2>
            <shared.Text font={shared.headline}>headline</shared.Text>
            <shared.Text font={shared.title1}>title1</shared.Text>
            <shared.Text font={shared.subheading2}>subheading2</shared.Text>
            <shared.Text font={shared.subheading1}>subheading1</shared.Text>
            <shared.Text font={shared.body2}>body2</shared.Text>
            <shared.Text font={shared.body1}>body1</shared.Text>
            <shared.Text font={shared.caption}>caption</shared.Text>
            <p>
              The font is Roboto, which is served as a webfont. The primary font
              size is <code>body2</code> which is 14px with a line-height of
              24px.
            </p>
          </StyledInset>

        </StyledSection>
        <StyledSection>
          <StyledInset>

            <h3>Header (AppBar)</h3>
            <StyledNote>
              <ul>
                <li>
                  <a href="http://www.material-ui.com/#/components/app-bar">
                    <code>AppBar</code>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/meedan/check-web/blob/develop/src/app/components/Header.js">
                    Check <code>Header</code>
                  </a>
                </li>
              </ul>
            </StyledNote>
            <p>
              The icon of the current team context (if any) should appear and a
              title should be present to describe the current page.
            </p>
            <p>
              A team search affordance should appear prominently. and the
              signed-in person's avatar should appear prominently.
            </p>

            <h3>Body</h3>
            <StyledNote>
              <ul>
                <li>
                  <a href="https://github.com/meedan/check-web/blob/develop/src/app/styles/js/shared.js">
                    Check <code>ContentColumn</code>
                  </a>
                </li>
              </ul>
            </StyledNote>
            <p>
              The layout should always have at least 2 units of padding on the
              bottom, so no body content ever touches the bottom row of the
              screen (except flush footers). We use <code>ContentColumn</code>{" "}
              when vertically-stacked content is needed.
            </p>

            <h3>Sidebar (Drawer)</h3>
            <StyledNote>
              <ul>
                <li>
                  <a href="http://www.material-ui.com/#/components/drawer">
                    <code>Drawer</code>
                  </a>
                </li>
              </ul>
            </StyledNote>
            <p>There is a hidden sidebar which appears as a modal overlay.</p>

            <h3>Footer</h3>
            <p>
              In general do not use a footer inside the app. There is a
              text-only footer on the sign in page.
            </p>

          </StyledInset>
        </StyledSection>

        <StyledSection>
          <StyledInset>
            <h3>Menus</h3>

            <StyledNote>
              <ul>
                <li>
                  <a href="http://www.material-ui.com/#/components/menu">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="http://www.material-ui.com/#/components/icon-menu">
                    IconMenu
                  </a>
                </li>
                <li>
                  <a href="http://www.material-ui.com/#/components/dropdown-menu">
                    Menu
                  </a>
                </li>
              </ul>
            </StyledNote>

            <p>
              Menu items may be disabled if not applicable to a certain context.
              Inactive menu items still appear in the menu, but they are visibly
              disabled (appear in a lighter shade of grey).
            </p>

            <Paper style={{ display: "inline-block" }}>
              <Menu>
                <MenuItem primaryText="Sleepy" />
                <MenuItem primaryText="Dopey" />
                <MenuItem disabled primaryText="Grumpy" />
              </Menu>
            </Paper>

          </StyledInset>
        </StyledSection>

        <StyledSection>

          <StyledInset>
            <h3>Blank State</h3>
            <p>
              There are at least two ways to deal with blank states: Displaying
              or avoiding.
            </p>
            <p>
              Displaying blank state: you need to consider to be clear and
              welcoming in the same time, or just go simply with a copy like "No
              activity yet"
            </p>
            <p>
              Avoiding blank state: Show the user what kind of content can be
              added, small tips to use the platform, remember to keep it brief.
            </p>
          </StyledInset>
        </StyledSection>

        <StyledSection>

          <StyledInset>
            <h3>Verification status</h3>

            <StyledNote>
              <ul>
                <li>
                  Default statuses (text label and color) are defined at the API
                  level and can be configured by team admins in the Check Admin
                  section.
                </li>
              </ul>
            </StyledNote>
            <p>
              Status are very important part of the user experience on Check, as
              a collaborative verification platform, users change reports status
              from "UNSTARTED" to "IN PROGRESS" or "VERIFIED", status label the
              report.
            </p>
            <p>
              Statuses are one of the few things in Check that have a color,
              which is carefully chosen for usability purposes, not decoration.
            </p>
            <p>When it appears as a button, we capitalize it.</p>
          </StyledInset>
        </StyledSection>

        <StyledSection>

          <StyledInset>
            <h3>Buttons and links</h3>
            <p>
              Buttons direct users towards action easily and clearly. Capitalize
              all the buttons.
            </p>

            <h3>Links</h3>
            <StyledNote>
              <ul>
                <li>
                  For links within the app, use <code>Link</code> from
                  react-router to prevent a full page reload.
                </li>
                <li>
                  For external links, use an <code>a</code> element with{" "}
                  <code> target="_blank" rel="noopener noreferrer"</code>.
                </li>
              </ul>
            </StyledNote>
            <p>Links are sentence case.</p>
            <p>
              Links are used for secondary actions which open new views, not for
              app behaviors.
            </p>
            <p>Link color should be distinct from surrounding text.</p>

            <h3>Flat button</h3>
            <StyledNote>
              <ul>
                <li>
                  <a href="http://www.material-ui.com/#/components/flat-button">
                    <code>FlatButton</code>
                  </a>
                </li>
              </ul>
            </StyledNote>
            <p>Use by default for app behaviors.</p>

            <FlatButton label="Add task" />

            <h3>Raised button</h3>
            <StyledNote>
              <ul>
                <li>
                  <a href="http://www.material-ui.com/#/components/raised-button">
                    <code>RaisedButton</code>
                  </a>
                </li>
              </ul>
            </StyledNote>

            <p>
              Use raised buttons in a busy space where there are competing calls
              to action, or the button could be missed by the user.
            </p>

            <RaisedButton label="Save" />

            <h3>Button Group</h3>

            <StyledNote>
              <ul>
                <li>
                  If there are multiple buttons, they'll need space between them
                  — use a <code>Row</code> with <code>Offset</code>, found in{" "}
                  <a href="https://github.com/meedan/check-web/blob/develop/src/app/styles/js/shared.js">
                    shared.js
                  </a>.
                </li>
              </ul>
            </StyledNote>

            <p>
              If there are multiple possible buttons for a given interaction,
              one should be more visually prominent with the{" "}
              <code>primary</code> prop.
            </p>

            <shared.Row>
              <shared.Offset>
                <RaisedButton label="Cancel" />
              </shared.Offset>
              <RaisedButton primary label="Save" />
            </shared.Row>

            <h3>Big button</h3>
            <p>
              In Check we use big buttons on the sign in page, to show our
              different way to sign in.
            </p>

            <h3>IconButton with Tooltip</h3>
            <StyledNote>
              <ul>
                <li>
                  <a href="http://www.material-ui.com/#/components/icon-button">
                    <code>IconButton</code>
                  </a>
                </li>
              </ul>
            </StyledNote>
            <p>An IconButton can have a tooltip.</p>
            <p>
              A tooltip is a hidden text that only appears if the user hovers
              over it. We use tooltips to explain a button or an action, but
              only when there is not room for regular helper text.
            </p>
            <p>
              Tooltips should be fewer than 5 words, and not show rich
              multi-line or multimedia information.
            </p>
            <p>
              A tooltip should positioned on the top or bottom, depending on
              which is the most legible in context.
            </p>

            <shared.Row>
              <IconButton tooltip="Hayy">
                <IconEdit />
              </IconButton>

              <p style={{ font: shared.caption, color: shared.black54 }}>
                Hover to view tooltip.
              </p>
            </shared.Row>
          </StyledInset>
        </StyledSection>
        <StyledSection>
          <StyledInset>
            <h3>Forms</h3>

            <StyledNote>
              <ul>
                <li>
                  <a href="http://www.material-ui.com/#/components/text-field">
                    <code>TextField</code>
                  </a>
                </li>
              </ul>
            </StyledNote>

            <p>
              In general use the float label pattern. Labels describe the
              purpose of text input elements. By "floating" they keep the size
              of the input to a minimum.{" "}
            </p>

            <div>
              <TextField floatingLabelText="Label text with no default value" />
            </div>

            <h4>Default value</h4>
            <p>
              Sometimes the value of the text field is populated with a default
              value.
            </p>

            <div>
              <TextField
                floatingLabelText="Label text"
                defaultValue="Default value"
              />
            </div>

            <h4>Disabled text fields</h4>
            <p>
              A text field can be disabled to indicate that it is not usable in
              the current state.
            </p>

            <div>
              <TextField floatingLabelText="Disabled text field" disabled />
            </div>

            <h4>Multiline text inputs</h4>
            <p>
              Sometimes text input needs to span multiple lines. Usually we have
              a scrollbar after four lines.{" "}
            </p>

            <div>
              <TextField
                floatingLabelText="Label text"
                defaultValue="This Text field accepts multiple lines"
                multiLine
                rowsMax={4}
              />
            </div>

            <h4> Helper text</h4>

            <StyledNote>
              <ul>
                <li>
                  This style of helper text is not provided by the Material UI
                  library. Use a <code>div</code> with <code>caption</code> font
                  in <code>black54</code>.
                </li>
              </ul>
            </StyledNote>

            <p>
              Helper text is optional copy that explains something in detail
              than the text field. On forms, errors appear in the same position.
              Helper text is always in a smaller fonts.
            </p>

            <div>
              <TextField floatingLabelText="Add your response" />
              <div
                style={{
                  font: shared.caption,
                  color: shared.black54,
                  marginTop: "-4px"
                }}
              >
                This is the helper text
              </div>
            </div>

            <h4>Errors</h4>

            <p>
              Communicate the error message in a human way to the user; why is
              it happening? Make it clear: is it a user-input error, or is it an
              app-error? Don't be afraid to use the word "error" to address an
              error.
            </p>
            <p>
              Communicate what should happen next: Make sure to address how user
              can resolve it or at least how to report it to team using a
              "Contact Human" link.
            </p>
            <p>
              When possible we put the validation message directly on the field
              in question. When the error relates to a combination of two
              fields, the validation message goes directly above the form. For
              example: when you type your password twice and it doesn't match,
              the error goes above the form instead of on both of the fields.
            </p>

            <StyledNote>
              <ul>
                <li>Errors are in <code>alertRed</code>.</li>
              </ul>
            </StyledNote>
            <div>
              <TextField
                floatingLabelText="Label text with no default value"
                errorText="Error text"
              />
            </div>

            <h4>Validation timing</h4>

            <StyledNote>
              <ul>
                <li>
                  See the{" "}
                  <a href="https://material.io/guidelines/patterns/errors.html#errors-usage">
                    Material UI validation guidelines
                  </a>.
                </li>
              </ul>
            </StyledNote>

            <p>
              When possible and logical, validate after a user interacts with a
              form element, for example after changing focus from password box
              to submit button, not after the form is submitted.
            </p>

            <h4>Form submission</h4>

            <p>There should always be a button that submits the form.</p>
            <p>When I press <code>return</code> the form submits.</p>
            <p>
              The form should pass basic validation to be submittable. The
              submit button should be disabled if the form can not be submitted.
            </p>

            <RaisedButton disabled label="Disabled" />

            <h4>Creating new lines</h4>

            <p>
              If <code>return</code> will submit the form, pressing{" "}
              <code>option</code>+<code>return</code> should add new lines.
            </p>
            <p>
              If the form is multiline and you might commonly use it to compose
              multiple paragraphs, <code>return</code> should create a new line.
            </p>

            <h4>Prevent repeat data entry</h4>
            <p>
              After user submits content, disable the submit button and clear
              the input field on submission.
            </p>

            <h4>Prevent lost data</h4>
            <p>
              Give a warning if a user is navigating away from an input with
              partially submitted data. When possible, cache partial form data
              in the user's browser.
            </p>

          </StyledInset>
        </StyledSection>

        <StyledSection>
          <StyledInset>
            <h3>User names and avatars</h3>

            <StyledNote>
              <ul>
                <li>
                  Check's{" "}
                  <a href="https://github.com/meedan/check-web/blob/develop/src/app/components/source/SourcePicture.js">
                    SourcePicture
                  </a>{" "}
                  provides a standard way to display both User and Source
                  avatars.
                </li>
              </ul>
            </StyledNote>

            <p>
              Generally user names should appear written out as full first and
              last name. User names should link to the profile page.
            </p>

            <p>
              Both user names and avatars should reveal a user tooltip in most
              contexts.
            </p>

            <p>
              Avatars can appear in three sizes, and be square (sources) or
              round (for members.)
            </p>

            <h5>Users</h5>
            <shared.Row wrap>
              {/* Todo: replace this with the real avatar component */}
              <StyledAvatar
                round
                label="avatarSizeLarge"
                size={shared.avatarSizeLarge}
              />
              <StyledAvatar
                round
                label="avatarSizeDefault"
                size={shared.avatarSize}
              />
              <StyledAvatar
                round
                label="avatarSizeSmall"
                size={shared.avatarSizeSmall}
              />
              <StyledAvatar
                round
                label="avatarSizeExtraSmall"
                size={shared.avatarSizeExtraSmall}
              />
            </shared.Row>

            <h5>Sources and Teams</h5>
            <shared.Row wrap>
              <StyledAvatar
                square
                label="avatarSizeLarge"
                size={shared.avatarSizeLarge}
              />
              <StyledAvatar
                square
                label="avatarSizeDefault"
                size={shared.avatarSize}
              />
              <StyledAvatar
                square
                label="avatarSizeSmall"
                size={shared.avatarSizeSmall}
              />
            </shared.Row>

            <h5>Pro Teams</h5>

            <p>Pro teams have a small badge in the corner.</p>
            <shared.Row wrap>
              <StyledAvatar
                square
                label="avatarSizeLarge"
                className="pro"
                size={shared.avatarSizeLarge}
              >
                <span className="badge">PRO</span>
              </StyledAvatar>
            </shared.Row>

          </StyledInset>
        </StyledSection>

        <StyledSection>
          <StyledInset>
            <h3>Disclaimers</h3>
            <p>
              We use disclaimers to warn and notify — for example, to tell users
              what's the best browser to view our or to warn that signing in
              with Twitter won't make our product post on their behalf.
            </p>
          </StyledInset>
        </StyledSection>

        <StyledSection>

          <StyledInset>
            <h3>Tags</h3>

            <StyledNote>
              <ul>
                <li>
                  <a href="http://www.material-ui.com/#/components/chip">
                    Chip
                  </a>
                </li>
              </ul>
            </StyledNote>

            <p>
              Clicking on the tag should always open a search in the same window
              for that tag. Tags appear as Material design <em>Chips</em>.
            </p>

            <Chip onRequestDelete>Super important</Chip>
          </StyledInset>
        </StyledSection>

        <StyledSection>

          <StyledInset>
            <h3>Timestamps</h3>
            <p>On Check a timestamp shows when content was added to Check.</p>
            <p>
              Using 24-hour timestamp, so we don't confuse our international
              audience with 12h am pm
            </p>
            <p>Show timezones.</p>
            <p>Show time and date when you hover on timestamp</p>
            <p>
              Write abbreviated month names e.g “Aug” and avoid representing
              months as numbers like “08”.
            </p>
            <p>
              Customize time zone for users where they are in the world right
              now.
            </p>
            <p>
              Hovering over the time stamp should show the exact time, with time
              zone indicated for the user's browser
            </p>
            <p>
              Clicking on the time stamp takes the user to{" "}
              <a href="http://time.is">time.is</a> URL
            </p>
            <p>Timestamps should follow the following format:</p>
            <p>“x minutes ago” up to 59 minutes</p>
            <p>“x hours ago” up to 24 hours</p>
            <p>“x days ago” up to x weeks ago</p>
          </StyledInset>
        </StyledSection>

        <StyledSection>
          <StyledInset>
            <h3>Success messages</h3>
            <StyledNote>
              <ul>
                <li>
                  Check{" "}
                  <a href="https://github.com/meedan/check-web/blob/develop/src/app/components/Message.js">
                    Message
                  </a>
                </li>
              </ul>
            </StyledNote>
            <p>
              You don't have to use the word success in your success message.
            </p>
            <p>Try to guide the user to what's next.</p>
            <p>Links in user-generated content</p>
            <p>
              When a user types or pastes content that contains a link starting
              with “http” the link should automatically be hyperlinked so it is
              clickable.
            </p>
            <p>
              Exception: hyperlinks should not be automatically added where
              clicking on UGC content generates a system action. So links should
              not be added in a report title or tag, where clicking yields other
              behavior.
            </p>
            <p>URL should click to open in a new window.</p>
            <p>Long URLs should always soft wrap to the bounding box</p>
          </StyledInset>
        </StyledSection>

        <StyledSection>
          <StyledInset>
            <h3>Paper</h3>
            <StyledNote>
              <ul>
                <li>
                  <a href="http://www.material-ui.com/#/components/paper">
                    <code>Paper</code>
                  </a>
                </li>
              </ul>
            </StyledNote>
            <p>
              Paper is a low-level component that you might never see directly
              — usually Paper is part of a Card component. It is defined by
              having a white background and a shadow. Material design allows 5
              shadow heights; we usually only use three of them.
            </p>
            <shared.Row>
              <StyledPaper zDepth={1}>Level 1</StyledPaper>
              <StyledPaper zDepth={2}>Level 2</StyledPaper>
              <StyledPaper zDepth={4}>Level 4</StyledPaper>
            </shared.Row>
          </StyledInset>
        </StyledSection>

        <StyledSection>
          <StyledInset>
            <h3>Cards</h3>
            <StyledNote>
              <ul>
                <li>
                  <a href="http://www.material-ui.com/#/components/card">
                    <code>Card</code>
                  </a>
                </li>
              </ul>
            </StyledNote>
            <p>
              We often content in cards. Cards structure Material UI{" "}
              <code>Paper</code> to have an (optional) header, body and
              (optional) bottom actions.
            </p>
          </StyledInset>
        </StyledSection>

        <StyledSection>

          <StyledInset>
            <h3>Tab navigation</h3>
            <StyledNote>
              <ul>
                <li>
                  <a href="http://www.material-ui.com/#/components/tabs">
                    <code>Tabs</code>
                  </a>
                </li>
              </ul>
            </StyledNote>
            <p>Tab-based navigation should flow in a logical order.</p>
            <p>
              Test with appropriate accessibility software, not just browsers.
            </p>

            <Card>
              <Tabs>
                <Tab label="One">
                  <shared.Text center font={shared.caption}>One</shared.Text>
                </Tab>
                <Tab label="Two">
                  <shared.Text center font={shared.caption}>Two</shared.Text>
                </Tab>
                <Tab label="Three">
                  <shared.Text center font={shared.caption}>Three</shared.Text>
                </Tab>
              </Tabs>
            </Card>
          </StyledInset>
        </StyledSection>

        <StyledSection>
          <StyledInset>
            <StyledNote>
              <ul>
                <li>
                  This should appear in context where an object is loading.
                </li>
                <li>Small is <code>thickness={2} size={20}</code></li>
                <li>Medium is <code>thickness={3} size={35}</code></li>
              </ul>
            </StyledNote>
            <h3>Circular progress indicator</h3>

            <p>Small</p>
            <CircularProgress thickness={2} size={20} />

            <p>Medium</p>
            <CircularProgress thickness={3} size={35} />

          </StyledInset>
        </StyledSection>

        <StyledSection>
          <StyledInset>
            <StyledNote />
            <h3>Blank state text</h3>

            <Card>
              <StyledBlankState>
                Add a link or claim <br />
                to start verifying
              </StyledBlankState>
            </Card>

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
            <StyledNote>
              <ul>
                <li>
                  Filtering and Sorting is currently an aspect of the Check{" "}
                  <a href="https://github.com/meedan/check-web/blob/develop/src/app/components/Search.js">
                    <code>Search</code>
                  </a>{" "}
                  component.
                </li>
              </ul>
            </StyledNote>
            <h3>Filter/sort</h3>
            <p>Filtering and sorting should apply immediately.</p>
            <p>
              The total number of items hidden by filters should be indicated.
            </p>
          </StyledInset>
        </StyledSection>
        <StyledSection>
          <StyledInset>
            <StyledNote>
              <ul>
                <li>
                  To use one of these icons you have to first find it on the{" "}
                  <a href="https://material.io/icons/">
                    Material-UI icons
                  </a>{" "}
                  index and import it with the section name in the path.
                </li>

                <li>
                  When an icon is used as a button, use <code>IconButton</code>{" "}
                  to achieve the ink ripple effect.
                </li>

                <li>When used as a menu, use <code>IconMenu</code>.</li>
              </ul>
            </StyledNote>
            <h3>Icons</h3>
            <p>
              Whenever possible, icons from the official Material-UI icon set
              should be used.
            </p>

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
            <StyledNote>
              <ul>
                <li>
                  The Check ripple color is <code>highlightBlue</code>, as
                  defined in the <code>MuiTheme</code>.
                </li>
              </ul>
            </StyledNote>
            <h3>The Ink ripple</h3>
            <p>
              The ink ripple gives user feedback about where and when a
              component has been clicked or tapped.
            </p>
          </StyledInset>

        </StyledSection>

        <StyledSection>
          <StyledInset>
            <StyledNote>
              <ul>
                <li><code>units(1)</code> returns <code>8px</code></li>
                <li><code>unitless(1)</code>returns <code>8</code></li>
                <li>
                  The horizontal grid uses non-negative integers. The vertical
                  grid uses half-steps (multiples of 4px) like{" "}
                  <code>units(1.5)</code>. To do math or negative numbers, use{" "}
                  <code>unitless()</code>.
                </li>
              </ul>
            </StyledNote>
            <h3>The 8px grid</h3>
            <p>The 8px grid is an essential point of standardization.</p>
            <p>
              All horizontal spacing (with some rare exceptions) use 8px
              increments.
            </p>
            <p>The vertical baseline allows 4px increments.</p>
          </StyledInset>
          {/*
          <StyledExampleGrid>
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
            <div>E</div>
            <div>F</div>
          </StyledExampleGrid> */}
        </StyledSection>

        <StyledSection>
          <StyledInset>
            <h3>Media queries</h3>
            <StyledNote>
              <ul>
                <li>
                  <code>mediaQuery</code>{" "}
                  <a href="https://github.com/meedan/check-web/blob/develop/src/app/styles/js/shared.js">
                    shared.js
                  </a>
                </li>
              </ul>
            </StyledNote>
            <p>
              Depending on the size of the viewport, we conditionally render
              different CSS, usually to create appropriate layouts for a given
              screen size. We make changes like this for mobile (448px), tablet
              (680px) and desktop sizes (800px).
            </p>
            <p>
              Avoid removing functionality when space is limited — perfer
              reflowing the page with a column layout, wrapping text or
              truncating, if necessary.
            </p>
          </StyledInset>
        </StyledSection>

        <StyledSection>
          <StyledInset>

            <StyledNote>
              <ul>
                <li><code>transitionSpeedFast</code></li>
                <li><code>transitionSpeedDefault</code></li>
                <li><code>transitionSpeedFast</code></li>
                <li>
                  in{" "}
                  <a href="https://github.com/meedan/check-web/blob/develop/src/app/styles/js/shared.js">
                    shared.js
                  </a>
                </li>
              </ul>
            </StyledNote>
            <h3>Transitions</h3>
            <p>
              In general, we prefer very fast transitions which complete in 300
              milliseconds or less. A "slow" transition is 500 milliseconds.
            </p>
          </StyledInset>

        </StyledSection>

        <StyledSection>
          <StyledInset>

            <h2>Copywriting guidelines</h2>

            <StyledNote>
              <ul>
                <li>
                  Refer to the{" "}
                  <a href="https://material.io/guidelines/style/writing.html">
                    Material guidelines on writing
                  </a>.
                </li>
              </ul>
            </StyledNote>

            <h3>Language</h3>
            <p>Keep it short.</p>
            <p>Prefer present tense.</p>
            <p>Use consistent terms throughout.</p>
            <p>
              Try not to use "We" inside the app, it's not about us, it's about
              the user. We use "We" with cautious on boarding and mail
              confirming, after user login we don't use "We".
            </p>
            <p>
              We address Check users by second person (you, your) only in
              dialogic interactions such as success, confirmation and
              acknowledgment messages, but avoid it for information
              architecture: for example we prefer “My teams” not “Your teams.”
            </p>

            <h3>Tone</h3>
            <p>
              Use tone of voice communicate values and vision. Prefer words that
              connote values, such as "group" instead of "organization" and "we
              believe in collaboration" instead of "build a team." Communicate
              why we are building this, not just what we are building.
            </p>

            <h3>Capitalization and punctuation</h3>
            <p>In general, use sentence-style capitalization.</p>
            <p>Avoid periods after hyperlinks and emails.</p>
            <p>Using numerals instead of words.</p>
            <p>Fully capitalize buttons.</p>

            <h3>Global writing</h3>
            <p>Check supports Arabic, French, Portuguese, and English.</p>
            <p>We strive to build tools that anyone in the world can use.</p>
            <p>
              Use simple English to be easily understood by our international
              users.
            </p>
          </StyledInset>
        </StyledSection>

      </MuiThemeProvider>
    );
  }
}

export default App;
