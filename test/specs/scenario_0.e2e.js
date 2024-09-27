import  { expect } from 'chai'
import { browser } from '@wdio/globals';
import LoginPage from '../../business/LoginPage.js'
import WorkSpace from '../../business/WorkSpace.js'

describe('Workspace settings - Editing workspace name', () => {

    it('should allow the user to edit the workspace name and save the changes', async () => {
        await LoginPage.login()
        await WorkSpace.open()
        await WorkSpace.editWorkspaceName()
        
        const workspaceName = await $('#displayName').getValue();
        expect(workspaceName).to.equal('Рабочее пространство Trello Automate');
    });
});
