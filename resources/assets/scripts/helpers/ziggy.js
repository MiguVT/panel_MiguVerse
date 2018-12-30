    var Ziggy = {
        namedRoutes: JSON.parse('{"debugbar.openhandler":{"uri":"_debugbar\/open","methods":["GET","HEAD"],"domain":null},"debugbar.clockwork":{"uri":"_debugbar\/clockwork\/{id}","methods":["GET","HEAD"],"domain":null},"debugbar.assets.css":{"uri":"_debugbar\/assets\/stylesheets","methods":["GET","HEAD"],"domain":null},"debugbar.assets.js":{"uri":"_debugbar\/assets\/javascript","methods":["GET","HEAD"],"domain":null},"debugbar.cache.delete":{"uri":"_debugbar\/cache\/{key}\/{tags?}","methods":["DELETE"],"domain":null},"index":{"uri":"\/","methods":["GET","HEAD"],"domain":null},"account":{"uri":"account","methods":["GET","HEAD"],"domain":null},"account.api":{"uri":"account\/api","methods":["GET","HEAD"],"domain":null},"account.api.new":{"uri":"account\/api\/new","methods":["GET","HEAD"],"domain":null},"account.api.revoke":{"uri":"account\/api\/revoke\/{identifier}","methods":["DELETE"],"domain":null},"account.two_factor":{"uri":"account\/two_factor","methods":["GET","HEAD"],"domain":null},"account.two_factor.enable":{"uri":"account\/two_factor\/totp","methods":["POST"],"domain":null},"account.two_factor.disable":{"uri":"account\/two_factor\/totp\/disable","methods":["POST"],"domain":null},"admin.index":{"uri":"admin","methods":["GET","HEAD"],"domain":null},"admin.statistics":{"uri":"admin\/statistics","methods":["GET","HEAD"],"domain":null},"admin.api.index":{"uri":"admin\/api","methods":["GET","HEAD"],"domain":null},"admin.api.new":{"uri":"admin\/api\/new","methods":["GET","HEAD"],"domain":null},"admin.api.delete":{"uri":"admin\/api\/revoke\/{identifier}","methods":["DELETE"],"domain":null},"admin.locations":{"uri":"admin\/locations","methods":["GET","HEAD"],"domain":null},"admin.locations.view":{"uri":"admin\/locations\/view\/{location}","methods":["GET","HEAD"],"domain":null},"admin.databases":{"uri":"admin\/databases","methods":["GET","HEAD"],"domain":null},"admin.databases.view":{"uri":"admin\/databases\/view\/{host}","methods":["GET","HEAD"],"domain":null},"admin.settings":{"uri":"admin\/settings","methods":["GET","HEAD"],"domain":null},"admin.settings.mail":{"uri":"admin\/settings\/mail","methods":["GET","HEAD"],"domain":null},"admin.settings.mail.test":{"uri":"admin\/settings\/mail\/test","methods":["GET","HEAD"],"domain":null},"admin.settings.advanced":{"uri":"admin\/settings\/advanced","methods":["GET","HEAD"],"domain":null},"admin.users":{"uri":"admin\/users","methods":["GET","HEAD"],"domain":null},"admin.users.json":{"uri":"admin\/users\/accounts.json","methods":["GET","HEAD"],"domain":null},"admin.users.new":{"uri":"admin\/users\/new","methods":["GET","HEAD"],"domain":null},"admin.users.view":{"uri":"admin\/users\/view\/{user}","methods":["GET","HEAD"],"domain":null},"admin.servers":{"uri":"admin\/servers","methods":["GET","HEAD"],"domain":null},"admin.servers.new":{"uri":"admin\/servers\/new","methods":["GET","HEAD"],"domain":null},"admin.servers.view":{"uri":"admin\/servers\/view\/{server}","methods":["GET","HEAD"],"domain":null},"admin.servers.view.details":{"uri":"admin\/servers\/view\/{server}\/details","methods":["GET","HEAD"],"domain":null},"admin.servers.view.build":{"uri":"admin\/servers\/view\/{server}\/build","methods":["GET","HEAD"],"domain":null},"admin.servers.view.startup":{"uri":"admin\/servers\/view\/{server}\/startup","methods":["GET","HEAD"],"domain":null},"admin.servers.view.database":{"uri":"admin\/servers\/view\/{server}\/database","methods":["GET","HEAD"],"domain":null},"admin.servers.view.manage":{"uri":"admin\/servers\/view\/{server}\/manage","methods":["GET","HEAD"],"domain":null},"admin.servers.view.delete":{"uri":"admin\/servers\/view\/{server}\/delete","methods":["GET","HEAD"],"domain":null},"admin.servers.view.manage.toggle":{"uri":"admin\/servers\/view\/{server}\/manage\/toggle","methods":["POST"],"domain":null},"admin.servers.view.manage.rebuild":{"uri":"admin\/servers\/view\/{server}\/manage\/rebuild","methods":["POST"],"domain":null},"admin.servers.view.manage.suspension":{"uri":"admin\/servers\/view\/{server}\/manage\/suspension","methods":["POST"],"domain":null},"admin.servers.view.manage.reinstall":{"uri":"admin\/servers\/view\/{server}\/manage\/reinstall","methods":["POST"],"domain":null},"admin.servers.view.database.delete":{"uri":"admin\/servers\/view\/{server}\/database\/{database}\/delete","methods":["DELETE"],"domain":null},"admin.nodes":{"uri":"admin\/nodes","methods":["GET","HEAD"],"domain":null},"admin.nodes.new":{"uri":"admin\/nodes\/new","methods":["GET","HEAD"],"domain":null},"admin.nodes.view":{"uri":"admin\/nodes\/view\/{node}","methods":["GET","HEAD"],"domain":null},"admin.nodes.view.settings":{"uri":"admin\/nodes\/view\/{node}\/settings","methods":["GET","HEAD"],"domain":null},"admin.nodes.view.configuration":{"uri":"admin\/nodes\/view\/{node}\/configuration","methods":["GET","HEAD"],"domain":null},"admin.nodes.view.allocation":{"uri":"admin\/nodes\/view\/{node}\/allocation","methods":["GET","HEAD"],"domain":null},"admin.nodes.view.servers":{"uri":"admin\/nodes\/view\/{node}\/servers","methods":["GET","HEAD"],"domain":null},"admin.nodes.view.configuration.token":{"uri":"admin\/nodes\/view\/{node}\/settings\/token","methods":["GET","HEAD"],"domain":null},"admin.nodes.view.allocation.removeBlock":{"uri":"admin\/nodes\/view\/{node}\/allocation\/remove","methods":["POST"],"domain":null},"admin.nodes.view.allocation.setAlias":{"uri":"admin\/nodes\/view\/{node}\/allocation\/alias","methods":["POST"],"domain":null},"admin.nodes.view.delete":{"uri":"admin\/nodes\/view\/{node}\/delete","methods":["DELETE"],"domain":null},"admin.nodes.view.allocation.removeSingle":{"uri":"admin\/nodes\/view\/{node}\/allocation\/remove\/{allocation}","methods":["DELETE"],"domain":null},"admin.nodes.view.allocation.removeMultiple":{"uri":"admin\/nodes\/view\/{node}\/allocations","methods":["DELETE"],"domain":null},"admin.nests":{"uri":"admin\/nests","methods":["GET","HEAD"],"domain":null},"admin.nests.new":{"uri":"admin\/nests\/new","methods":["GET","HEAD"],"domain":null},"admin.nests.view":{"uri":"admin\/nests\/view\/{nest}","methods":["GET","HEAD"],"domain":null},"admin.nests.egg.new":{"uri":"admin\/nests\/egg\/new","methods":["GET","HEAD"],"domain":null},"admin.nests.egg.view":{"uri":"admin\/nests\/egg\/{egg}","methods":["GET","HEAD"],"domain":null},"admin.nests.egg.export":{"uri":"admin\/nests\/egg\/{egg}\/export","methods":["GET","HEAD"],"domain":null},"admin.nests.egg.variables":{"uri":"admin\/nests\/egg\/{egg}\/variables","methods":["GET","HEAD"],"domain":null},"admin.nests.egg.scripts":{"uri":"admin\/nests\/egg\/{egg}\/scripts","methods":["GET","HEAD"],"domain":null},"admin.nests.egg.import":{"uri":"admin\/nests\/import","methods":["POST"],"domain":null},"admin.nests.egg.variables.edit":{"uri":"admin\/nests\/egg\/{egg}\/variables\/{variable}","methods":["PATCH"],"domain":null},"admin.packs":{"uri":"admin\/packs","methods":["GET","HEAD"],"domain":null},"admin.packs.new":{"uri":"admin\/packs\/new","methods":["GET","HEAD"],"domain":null},"admin.packs.new.template":{"uri":"admin\/packs\/new\/template","methods":["GET","HEAD"],"domain":null},"admin.packs.view":{"uri":"admin\/packs\/view\/{pack}","methods":["GET","HEAD"],"domain":null},"admin.packs.view.export":{"uri":"admin\/packs\/view\/{pack}\/export\/{files?}","methods":["POST"],"domain":null},"auth.login":{"uri":"auth\/login","methods":["GET","HEAD"],"domain":null},"auth.forgot-password":{"uri":"auth\/password","methods":["GET","HEAD"],"domain":null},"auth.reset":{"uri":"auth\/password\/reset\/{token}","methods":["GET","HEAD"],"domain":null},"auth.login-checkpoint":{"uri":"auth\/login\/checkpoint","methods":["POST"],"domain":null},"auth.reset-password":{"uri":"auth\/password\/reset","methods":["POST"],"domain":null},"auth.logout":{"uri":"auth\/logout","methods":["GET","HEAD"],"domain":null},"server.credentials":{"uri":"api\/server\/{server}\/credentials","methods":["GET","HEAD"],"domain":null},"server.files":{"uri":"api\/server\/{server}\/files\/{directory?}","methods":["GET","HEAD"],"domain":null},"server.index":{"uri":"api\/server\/{server}","methods":["GET","HEAD"],"domain":null},"server.console":{"uri":"api\/server\/{server}\/console","methods":["GET","HEAD"],"domain":null},"api.application.users":{"uri":"api\/application\/users","methods":["GET","HEAD"],"domain":null},"api.application.users.view":{"uri":"api\/application\/users\/{user}","methods":["GET","HEAD"],"domain":null},"api.application.users.external":{"uri":"api\/application\/users\/external\/{external_id}","methods":["GET","HEAD"],"domain":null},"api.application.nodes":{"uri":"api\/application\/nodes","methods":["GET","HEAD"],"domain":null},"api.application.nodes.view":{"uri":"api\/application\/nodes\/{node}","methods":["GET","HEAD"],"domain":null},"api.application.allocations":{"uri":"api\/application\/nodes\/{node}\/allocations","methods":["GET","HEAD"],"domain":null},"api.application.allocations.view":{"uri":"api\/application\/nodes\/{node}\/allocations\/{allocation}","methods":["DELETE"],"domain":null},"api.applications.locations":{"uri":"api\/application\/locations","methods":["GET","HEAD"],"domain":null},"api.application.locations.view":{"uri":"api\/application\/locations\/{location}","methods":["GET","HEAD"],"domain":null},"api.application.servers":{"uri":"api\/application\/servers","methods":["GET","HEAD"],"domain":null},"api.application.servers.view":{"uri":"api\/application\/servers\/{server}","methods":["GET","HEAD"],"domain":null},"api.application.servers.external":{"uri":"api\/application\/servers\/external\/{external_id}","methods":["GET","HEAD"],"domain":null},"api.application.servers.details":{"uri":"api\/application\/servers\/{server}\/details","methods":["PATCH"],"domain":null},"api.application.servers.build":{"uri":"api\/application\/servers\/{server}\/build","methods":["PATCH"],"domain":null},"api.application.servers.startup":{"uri":"api\/application\/servers\/{server}\/startup","methods":["PATCH"],"domain":null},"api.application.servers.suspend":{"uri":"api\/application\/servers\/{server}\/suspend","methods":["POST"],"domain":null},"api.application.servers.unsuspend":{"uri":"api\/application\/servers\/{server}\/unsuspend","methods":["POST"],"domain":null},"api.application.servers.reinstall":{"uri":"api\/application\/servers\/{server}\/reinstall","methods":["POST"],"domain":null},"api.application.servers.rebuild":{"uri":"api\/application\/servers\/{server}\/rebuild","methods":["POST"],"domain":null},"api.application.servers.databases":{"uri":"api\/application\/servers\/{server}\/databases","methods":["GET","HEAD"],"domain":null},"api.application.servers.databases.view":{"uri":"api\/application\/servers\/{server}\/databases\/{database}","methods":["GET","HEAD"],"domain":null},"api.application.nests":{"uri":"api\/application\/nests","methods":["GET","HEAD"],"domain":null},"api.application.nests.view":{"uri":"api\/application\/nests\/{nest}","methods":["GET","HEAD"],"domain":null},"api.application.nests.eggs":{"uri":"api\/application\/nests\/{nest}\/eggs","methods":["GET","HEAD"],"domain":null},"api.application.nests.eggs.view":{"uri":"api\/application\/nests\/{nest}\/eggs\/{egg}","methods":["GET","HEAD"],"domain":null},"api.client.index":{"uri":"api\/client","methods":["GET","HEAD"],"domain":null},"api.client.account":{"uri":"api\/client\/account","methods":["GET","HEAD"],"domain":null},"api.client.account.update-email":{"uri":"api\/client\/account\/email","methods":["PUT"],"domain":null},"api.client.account.update-password":{"uri":"api\/client\/account\/password","methods":["PUT"],"domain":null},"api.client.servers.view":{"uri":"api\/client\/servers\/{server}","methods":["GET","HEAD"],"domain":null},"api.client.servers.resources":{"uri":"api\/client\/servers\/{server}\/utilization","methods":["GET","HEAD"],"domain":null},"api.client.servers.command":{"uri":"api\/client\/servers\/{server}\/command","methods":["POST"],"domain":null},"api.client.servers.power":{"uri":"api\/client\/servers\/{server}\/power","methods":["POST"],"domain":null},"api.client.servers.databases":{"uri":"api\/client\/servers\/{server}\/databases","methods":["GET","HEAD"],"domain":null},"api.client.servers.databases.delete":{"uri":"api\/client\/servers\/{server}\/databases\/{database}","methods":["DELETE"],"domain":null},"api.remote.authenticate":{"uri":"api\/remote\/authenticate\/{token}","methods":["GET","HEAD"],"domain":null},"api.remote.download_file":{"uri":"api\/remote\/download-file","methods":["POST"],"domain":null},"api.remote.eggs":{"uri":"api\/remote\/eggs","methods":["GET","HEAD"],"domain":null},"api.remote.eggs.download":{"uri":"api\/remote\/eggs\/{uuid}","methods":["GET","HEAD"],"domain":null},"api.remote.scripts":{"uri":"api\/remote\/scripts\/{uuid}","methods":["GET","HEAD"],"domain":null},"api.remote.sftp":{"uri":"api\/remote\/sftp","methods":["POST"],"domain":null},"daemon.pack.pull":{"uri":"daemon\/packs\/pull\/{uuid}","methods":["GET","HEAD"],"domain":null},"daemon.pack.hash":{"uri":"daemon\/packs\/pull\/{uuid}\/hash","methods":["GET","HEAD"],"domain":null},"daemon.configuration":{"uri":"daemon\/configure\/{token}","methods":["GET","HEAD"],"domain":null},"daemon.install":{"uri":"daemon\/install","methods":["POST"],"domain":null}}'),
        baseUrl: 'http://pterodactyl.test/',
        baseProtocol: 'http',
        baseDomain: 'pterodactyl.test',
        basePort: false
    };

    export {
        Ziggy
    }
