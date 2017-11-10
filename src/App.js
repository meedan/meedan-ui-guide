import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import logo from './meedan-white.svg';


injectGlobal`
  body {
    margin: 0;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
  border-bottom: 1px solid #fcfcfc;
  ${props => (props.inverted ? 'background-color: black; color: white;' : null)}
`;

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
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
            <p>This guide is intended as an extension of the Material UI guide. In general we adopt the Material guidelines. In some cases, documented here, we deviate from them. This guide is being developed in tandem with the 2017 Check copywriting spreadsheet.</p>
          </StyledInset>
        </StyledSection>

        <StyledSection>
          <StyledInset>
            <h2>Components</h2>
            <h3>Buttons</h3>
            <p>Buttons are important because ...</p>
            <RaisedButton label="Save" />
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


            <h2>Structural overview</h2>

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


            <h3>Body</h3>
            <p>The layout should always have at least 2 units of padding on the bottom, so no body content ever touches the bottom row of the screen (except flush footers).</p>

            <h3>AppBar (Header)</h3>
            <p>The icon of the current team context (if any) should appear.</p>
            <p>A title should be present to describe the current page.</p>
            <p>A team search affordance should appear prominently.</p>
            <p>Your own avatar should appear prominently.</p>

            <p>Our code (“Header” component)</p>

            <p>Material App Bar guidelines</p>

            <p>material-ui AppBar</p>

            <h3>Menus</h3>

            <p>Menu items may be disabled if not applicable to a certain context.</p>
            <p>Inactive menu items still appear in the menu, but they are visibly disabled (appear in a lighter shade of grey).</p>

            <h3>Tooltip</h3>
            <p>A tooltip is a hidden text that only appears if the user hovers over it.</p>
            <p>In Check we use tooltips to explain a button or an action, but only when there is not room for regular helper text.</p>
            <p>Tooltips should be fewer than 5 words, and not show rich multi-line or multimedia information.</p>

            <h3>Blank State</h3>
            <p>There are two ways to deal with blank states: Displaying or avoiding</p>
            <p>Displaying blank state: you need to consider to be clear and welcoming in the same time, or just go simply with a copy like "No activity yet"</p>
            <p>Avoiding blank state: Show the user what kind of content can be added, small tips to use the platform, remember to keep it brief.</p>

            <h3>Verification status</h3>
            <p>Status are very important part of the user experience on Check, as a collaborative verification platform, users change reports status from "UNSTARTED" to "IN PROGRESS" or "VERIFIED", status label the report.</p>
            <p>Statuses are one of the few things in Check that have a color, which is carefully chosen for usability purposes, not decoration.</p>
            <p>When it appears as a button, we capitalize it.</p>

            <h3>Buttons and links</h3>
            <p>Buttons direct users towards action easily and clearly. Capitalize all the buttons.</p>

            <h3>Links</h3>
            <p>Links are sentence case.</p>
            <p>Links are used for secondary actions which open new views, not for app behaviors.</p>
            <p>Link color should be distinct from surrounding text.</p>

            <h3>Flat button</h3>
            <p>Use by default for app behaviors.</p>

            <h3>Raised button</h3>
            <p>Use raised buttons in a busy space where there are competing calls to action, or the button could be missed by the user.</p>

            <h3>Big button</h3>
            <p>In Check we use big buttons on the sign in page, to show our different way to sign in.</p>

            <h3>Forms</h3>

            <h4>Labels</h4>
            <p>Labels describe the purpose of text input elements. There are different types of labels (floating or Fixed), it's important that every text field have a label.</p>

            <h4>Placeholder text</h4>
            <p>Placeholder text guides the user what kind of input this field accept.</p>
            <p>Placeholder text clarifies where the input is, so it is more obvious that it is an input and not just a horizontal line.</p>

            <h4> Helper text</h4>
            <p>Helper text is optional copy that explains something in detail than the text field.</p>
            <p>On forms, errors appear in the same position.</p>
            <p>Helper text is always in a smaller fonts.</p>

            <h4>Validation</h4>
            <p>When to validate:</p>
            <p>When possible and logical, validate after a user interacts with a form element, for example after changing focus from password box to submit button — not after the form is submitted.</p>

            <h4>Errors</h4>
            <p>Don't be afraid to use the word "error" to address an error.</p>
            <p>As a copywriter you should communicate the error message in a human way to the user; why is it happening? Make it clear: is it a user-input error, or is it an app-error?</p>
            <p>The error should communicate what should happen next: Make sure to address how user can resolve it or at least how to report it to team using a "Contact Human" link.</p>
            <p>Color of the error: should be red.</p>
            <p>Location of the error: When possible we put the validation message directly on the field in question. When the error relates to a combination of two fields, the validation message goes directly above the form. For example: when you type your password twice and it doesn't match, the error goes above the form instead of on both of the fields.</p>
            <p>(In the case of typing the password twice, we deviate from the Material Design guidelines, which suggest putting the password error on the second password element, which seems illogical since you can't be sure which one is incorrect, you really need the user to retype both.  — CGB  April 2017 )</p>

            <h4>Form submission</h4>
            <p>In general, when I press return the form submits.</p>
            <p>Exception: If the form is very large and you commonly compose multiple paragraphs, return should create a new line, and you have to tab or mouse to get to the submit button. In this case achieving multi-line input can be done with shift+return, when multiline input is possible.</p>
            <p>If return will submit the form, pressing option+return can still add new lines.</p>
            <p>There should always be submit and cancel buttons, don’t rely on “press return to submit” instructions.</p>
            <p>Prevent accidental submissions: After user submits content, disable the submit button + clear the input field on submission. This is most common with submitting a report, a comment or adding a task, and hitting enter multiple times.</p>

            <p>See the <a href="https://material.io/guidelines/patterns/errors.html#errors-usage">Material UI validation guidelines</a>.</p>

            <h3>User names</h3>
            <p>Generally user names should appear written out as full first and last name.</p>
            <p>User names should link to the profile page.</p>

            <h3>Disclaimers</h3>
            <p>We use disclaimers to warn and notify — for example, to tell users what's the best browser to view our or to warn that signing in with Twitter won't make our product post on their behalf.</p>

            <h3>Tags</h3>
            <p>Clicking on the tag should always open a search in the same window for that tag.</p>

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

            <h3>Success messages</h3>
            <p>You don't have to use the word success in your success message.</p>
            <p>Try to guide the user to what's next.</p>
            <p>Links in user-generated content</p>
            <p>When a user types or pastes content that contains a link starting with “http” the link should automatically be hyperlinked so it is clickable.</p>
            <p>Exception: hyperlinks should not be automatically added where clicking on UGC content generates a system action. So links should not be added in a report title or tag, where clicking yields other behavior.</p>
            <p>URL should click to open in a new window.</p>
            <p>Long URLs should always soft wrap to the bounding box</p>

            <h3>Tab navigation</h3>
            <p>Tab-based navigation should flow in a logical order.</p>
            <p>Test with appropriate accessibility software, not just browsers.</p>

            <h3>Lists of projects</h3>
            <p>Projects should be listed with most recently active first.</p>

            <h3>Filter/sort</h3>
            <p>Filtering and sorting should apply immediately.</p>
            <p>The total number of items hidden by filters should be indicated.</p>

          </StyledInset>
        </StyledSection>
      </MuiThemeProvider>
    );
  }
}

export default App;
